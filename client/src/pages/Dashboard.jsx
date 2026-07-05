import { useEffect, useState } from "react";
import axios from "axios";
import CashChart from "../components/CashChart";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalATMs: 0,
    onlineATMs: 0,
    offlineATMs: 0,
    cashAvailable: "",
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/dashboard"
        );

        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "20px" }}>Dashboard Overview</h2>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Total ATMs</h3>
          <p>{dashboardData.totalATMs}</p>
        </div>

        <div style={styles.card}>
          <h3>Active ATMs</h3>
          <p>{dashboardData.onlineATMs}</p>
        </div>

        <div style={styles.card}>
          <h3>Low Cash Alerts</h3>
          <p>{dashboardData.offlineATMs}</p>
        </div>

        <div style={styles.card}>
          <h3>Total Cash</h3>
          <p>{dashboardData.cashAvailable}</p>
        </div>
      </div>

      <div style={styles.chart}>
        <CashChart />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  cards: {
    display: "flex",
    gap: "15px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    minWidth: "180px",
    background: "#f1f5f9",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  chart: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
};