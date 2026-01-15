import React from "react";

const MetricCard = ({ title, value, subtitle, color }) => {
  return (
    <div style={{ ...cardStyle, borderLeft: `4px solid ${color}` }}>
      <div style={titleStyle}>{title}</div>
      <div style={{ ...valueStyle, color }}>{value}</div>
      {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
    </div>
  );
};

export default MetricCard;

/* styles */
const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(6px)",
  padding: "1.2rem",
  borderRadius: "12px",
  minWidth: "180px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
};

const titleStyle = {
  fontSize: "0.9rem",
  opacity: 0.7,
  marginBottom: "0.4rem",
};

const valueStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
};

const subtitleStyle = {
  marginTop: "0.3rem",
  fontSize: "0.75rem",
  opacity: 0.6,
};
