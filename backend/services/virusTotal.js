const VT_URL = "https://www.virustotal.com/api/v3/urls";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function scanWithVirusTotal(url) {
  const apiKey = process.env.VIRUSTOTAL_API_KEY;
  if (!apiKey) throw new Error("VirusTotal API key missing");

  // Submit URL
  const submitRes = await fetch(VT_URL, {
    method: "POST",
    headers: {
      "x-apikey": apiKey,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `url=${encodeURIComponent(url)}`
  });

  const submitData = await submitRes.json();
  const analysisId = submitData?.data?.id;
  if (!analysisId) throw new Error("Submission failed");

  // Wait for VT to finish analysis
  await sleep(3000); // 3 seconds (important)

  // Fetch analysis
  const analysisRes = await fetch(
    `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
    {
      headers: { "x-apikey": apiKey }
    }
  );

  const analysisData = await analysisRes.json();
  const stats = analysisData?.data?.attributes?.stats;

  if (!stats) throw new Error("Analysis not ready");

  return stats;
}
