const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// FINAL ATM DATA
const atms = [
  { id: 1, location: "Faisalabad Main", cash: 80 },
  { id: 2, location: "GCUF Campus", cash: 25 },
  { id: 3, location: "Jaranwala Road", cash: 0 }
];

// STATUS CALCULATION (NO EXTRA FEATURES)
const getStatus = (cash) => {
  if (cash === 0) return "Offline";
  if (cash <= 30) return "Low Cash";
  return "Active";
};

// CASH STATUS
app.get("/api/cash-status", (req, res) => {
  res.json(
    atms.map(a => ({
      ...a,
      status: getStatus(a.cash)
    }))
  );
});

// REPORTS
app.get("/api/reports", (req, res) => {
  res.json({
    totalATMs: atms.length,
    totalCash: atms.reduce((s, a) => s + a.cash, 0),
    active: atms.filter(a => getStatus(a.cash) === "Active").length,
    lowCash: atms.filter(a => getStatus(a.cash) === "Low Cash").length,
    offline: atms.filter(a => getStatus(a.cash) === "Offline").length
  });
});

// SETTINGS (STATIC)
app.get("/api/settings", (req, res) => {
  res.json({
    maxCash: 100,
    refillThreshold: 30,
    alertThreshold: 20,
    currency: "PKR"
  });
});

app.listen(5000, () => {
  console.log("ATM Dashboard Running - MVP Ready");
});