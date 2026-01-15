import React from "react";

const Settings = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "700px" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Settings</h2>

      {/* Scan Mode */}
      <div style={cardStyle}>
        <h4>Scan Mode</h4>
        <p style={descStyle}>
          Choose how TwilightCipher analyzes links.
        </p>
        <select style={inputStyle} disabled>
          <option>Real-time API (recommended)</option>
          <option>Rule-based (demo)</option>
        </select>
      </div>

      {/* Privacy */}
      <div style={cardStyle}>
        <h4>Privacy</h4>
        <p style={descStyle}>
          Control how scan data is stored.
        </p>
        <label style={checkboxStyle}>
          <input type="checkbox" checked readOnly />
          Save scan history locally
        </label>
      </div>

      {/* About */}
      <div style={cardStyle}>
        <h4>About TwilightCipher</h4>
        <p style={descStyle}>
          Version 1.0 • AI-powered link safety analysis
        </p>
        <p style={{ opacity: 0.6, fontSize: "0.8rem" }}>
          Built as a cybersecurity awareness project.
        </p>
      </div>
    </div>
  );
};

export default Settings;

/* styles */
const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  padding: "1.2rem",
  borderRadius: "12px",
  marginBottom: "1.2rem",
};

const descStyle = {
  opacity: 0.7,
  fontSize: "0.9rem",
  marginBottom: "0.6rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.6rem",
  borderRadius: "8px",
  border: "none",
  background: "#0e1a33",
  color: "white",
};

const checkboxStyle = {
  display: "flex",
  gap: "0.6rem",
  alignItems: "center",
};
