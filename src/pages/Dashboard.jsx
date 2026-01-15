import { useState } from "react";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const scanLink = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const res = await fetch(
        `http://localhost:5000/scan?url=${encodeURIComponent(url)}`
      );

      if (!res.ok) {
        throw new Error("Backend not reachable");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(6px)"
      }}
    >
      <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>
        TwilightCipher Dashboard
      </h1>

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste URL to scan"
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "16px"
        }}
      />

      <br />

      <button
        onClick={scanLink}
        disabled={loading}
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          background: "#3ecbff",
          color: "#000",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        {loading ? "Scanning..." : "Scan Link"}
      </button>

      {/* RESULT */}
      {result && (
        <div style={{ marginTop: "30px" }}>
          <h3>Result</h3>
          <p>Status: <b>{result.status}</b></p>
          <p>Score: <b>{result.score}</b></p>
          <ul>
            {result.reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <p style={{ marginTop: "20px", color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}
