import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SafeLinkCard from "../components/SafeLinkCard";
import MetricCard from "../components/MetricCard";
import ActivityCard from "../components/ActivityCard";
import ScoreInfoCard from "../components/ScoreInfoCard";

const API_URL = "http://localhost:5000";

export default function Dashboard() {
  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [isSafe, setIsSafe] = useState(null);
  const [trustScore, setTrustScore] = useState(0);
  const [scanMessage, setScanMessage] = useState("");

  const handleScan = async () => {
    if (!urlInput) return;

    setLoading(true);
    setScanned(false);

    try {
      const res = await fetch(`${API_URL}/scan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: urlInput })
      });

      const data = await res.json();

      setIsSafe(data.safe);
      setTrustScore(data.trustScore);
      setScanMessage(data.message);
      setScanned(true);
    } catch (err) {
      setScanMessage("Backend not reachable");
      setScanned(true);
    }

    setLoading(false);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "1.5rem",
          background: "#0b1220",
          color: "#e5e7eb"
        }}
      >
        {/* TOP INPUT */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h2>Scan a Link</h2>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com"
              style={{
                flex: 1,
                padding: "0.6rem",
                borderRadius: "8px",
                border: "none"
              }}
            />
            <button
              onClick={handleScan}
              disabled={loading}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                background: "#3bc9ff",
                border: "none",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              {loading ? "Scanning..." : "Scan"}
            </button>
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ActivityCard />
            <MetricCard title="Sites Analysed" value={scanned ? 1 : 0} />
            <MetricCard title="Threats Detected" value={scanned && !isSafe ? 1 : 0} />
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scanned && (
              <>
                <SafeLinkCard safe={isSafe} message={scanMessage} />

                <div
                  style={{
                    background: "#0e1a33",
                    padding: "1rem",
                    borderRadius: "14px"
                  }}
                >
                  <h4>Trust Score</h4>
                  <div
                    style={{
                      height: "10px",
                      background: "#1f2937",
                      borderRadius: "6px",
                      marginTop: "0.5rem"
                    }}
                  >
                    <div
                      style={{
                        width: `${trustScore}%`,
                        height: "100%",
                        background: "#3bc9ff",
                        borderRadius: "6px"
                      }}
                    />
                  </div>
                  <p style={{ marginTop: "0.5rem", fontWeight: "600" }}>
                    {trustScore}%
                  </p>
                </div>

                <ScoreInfoCard />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
