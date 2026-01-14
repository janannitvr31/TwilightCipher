import React from "react";
import MetricCard from "../components/MetricCard";

const Analytics = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Analytics</h2>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <MetricCard title="Total Scans" value="12" color="#4cc9f0" />
        <MetricCard title="Safe URLs" value="9" color="#4ade80" />
        <MetricCard title="Dangerous URLs" value="3" color="#ef4444" />
      </div>
    </div>
  );
};

export default Analytics;
