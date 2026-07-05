const getDashboardData = (req, res) => {
  res.json({
    message: "Dashboard API is working",
    totalATMs: 150,
    onlineATMs: 145,
    offlineATMs: 5,
    cashAvailable: "PKR 85,000,000"
  });
};

module.exports = {
  getDashboardData
};