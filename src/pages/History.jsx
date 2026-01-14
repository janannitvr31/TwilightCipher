import React from "react";

const History = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Scan History</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #333" }}>
            <th>URL</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>https://google.com</td>
            <td>13 Jan 2026</td>
            <td style={{ color: "lightgreen" }}>✔ Safe</td>
          </tr>
          <tr>
            <td>https://malicious-test.com</td>
            <td>13 Jan 2026</td>
            <td style={{ color: "#ef4444" }}>✖ Dangerous</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
