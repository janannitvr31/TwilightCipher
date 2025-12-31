import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [scanned, setScanned] = useState(false);
  const [isSafe, setIsSafe] = useState(null);
  const [trustScore, setTrustScore] = useState(0);
  const [threatsBlocked, setThreatsBlocked] = useState(1254);

  const handleScan = () => {
    if (!url.trim()) return;

    setScanned(true);

    // Frontend simulation (no backend yet)
    const riskyKeywords = ["scam", "phishing", "malware", "fraud", "hack"];
    const unsafe = riskyKeywords.some(word =>
      url.toLowerCase().includes(word)
    );

    if (unsafe) {
      setIsSafe(false);
      setTrustScore(28);
      setThreatsBlocked(prev => prev + 1);
    } else {
      setIsSafe(true);
      setTrustScore(96);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem"
        }}
      >
        {/* TOP ROW */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {/* LEFT COLUMN */}
          <div style={{ width: "260px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={cardStyle}>
              <h4>🕘 Recent Scans</h4>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "0.6rem", fontSize: "0.85rem", opacity: 0.85 }}>
                <li>google.com — ✅</li>
                <li>free-gift-scam.net — ⚠️</li>
                <li>secure-login.xyz — ⚠️</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h4>🛡 System Status</h4>
              <p style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.4rem" }}>
                Protection: Active<br />
                Scan Engine: Online<br />
                Last Scan: Just now
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* SCAN BAR */}
            <div style={{ display: "flex", gap: "0.8rem", maxWidth: "520px" }}>
              <input
                type="text"
                placeholder="Paste URL to scan..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{
                  flex: 1,
                  padding: "0.7rem",
                  borderRadius: "8px",
                  border: "1px solid #333",
                  background: "#0b1220",
                  color: "#fff"
                }}
              />
              <button
                onClick={handleScan}
                style={{
                  padding: "0.7rem 1.2rem",
                  borderRadius: "8px",
                  border: "none",
                  background: "#3bc9ff",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Scan
              </button>
            </div>

            {/* SCAN RESULT */}
            {scanned && (
              <div
                style={{
                  maxWidth: "360px",
                  padding: "1.2rem",
                  borderRadius: "14px",
                  background: "#0e1a33",
                  border: isSafe ? "1px solid #2ecc71" : "1px solid #ff4d4f"
                }}
              >
                <h3>{isSafe ? "✅ Safe Link" : "⚠️ Unsafe Link"}</h3>
                <p style={{ opacity: 0.75 }}>
                  {isSafe
                    ? "No suspicious behavior detected."
                    : "This link shows signs of malicious intent."}
                </p>
              </div>
            )}

            {/* STATS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                maxWidth: "700px"
              }}
            >
              <div style={cardStyle}>
                <h4>Threats Blocked</h4>
                <p style={bigNumber}>{threatsBlocked}</p>
              </div>

              <div style={cardStyle}>
                <h4>Trust Score</h4>
                <p style={bigNumber}>{trustScore}%</p>
                <div
                  style={{
                    height: "6px",
                    background: "#1c2c4a",
                    borderRadius: "4px",
                    marginTop: "0.5rem"
                  }}
                >
                  <div
                    style={{
                      width: `${trustScore}%`,
                      height: "100%",
                      background: "#3bc9ff",
                      borderRadius: "4px"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* GUIDE */}
            <div style={{ ...cardStyle, maxWidth: "700px" }}>
              <h4>Trust Score Guide</h4>
              <p style={{ opacity: 0.75 }}>
                • 80–100% → Safe<br />
                • 50–79% → Suspicious<br />
                • Below 50% → Dangerous
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* STYLES */
const cardStyle = {
  background: "#0e1a33",
  padding: "1.2rem",
  borderRadius: "14px"
};

const bigNumber = {
  fontSize: "1.8rem",
  fontWeight: "700",
  marginTop: "0.4rem"
};
