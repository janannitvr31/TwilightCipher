export async function scanWithVirusTotal(url) {
  const apiKey = process.env.VIRUSTOTAL_API_KEY;

  if (!apiKey) {
    throw new Error("VirusTotal API key missing");
  }

  // Submit URL for analysis
  const submitRes = await fetch(
    "https://www.virustotal.com/api/v3/urls",
    {
      method: "POST",
      headers: {
        "x-apikey": apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `url=${encodeURIComponent(url)}`
    }
  );

  const submitData = await submitRes.json();
  const analysisId = submitData.data.id;

  // Get analysis result
  const resultRes = await fetch(
    `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
    {
      headers: {
        "x-apikey": apiKey
      }
    }
  );

  const resultData = await resultRes.json();
  const stats = resultData.data.attributes.stats;

  return {
    engine: "VirusTotal",
    status: stats.malicious > 0 ? "dangerous" : "safe",
    stats
  };
}
