import { scanWithVirusTotal } from "./virusTotal.js";
import { scanWithGoogleSafeBrowsing } from "./googleSafeBrowsing.js";

export async function scanURL(url) {
  const engines = [];
  const errors = [];

  // --- VirusTotal ---
  if (process.env.VIRUSTOTAL_API_KEY) {
    try {
      const vt = await scanWithVirusTotal(url);
      engines.push(vt);
    } catch (err) {
      errors.push({ engine: "VirusTotal", error: err.message });
    }
  }

  // --- Google Safe Browsing (FIXED ENV NAME) ---
  if (process.env.GOOGLE_SAFE_BROWSING_API_KEY) {
    try {
      const gsb = await scanWithGoogleSafeBrowsing(url);
      engines.push(gsb);
    } catch (err) {
      errors.push({ engine: "Google Safe Browsing", error: err.message });
    }
  }

  // --- Fallback heuristic (CRITICAL) ---
  if (engines.length === 0) {
    let score = 90;
    const reasons = [];

    if (!url.startsWith("https://")) {
      score -= 25;
      reasons.push("URL does not use HTTPS");
    }

    if (url.match(/\d+\.\d+\.\d+\.\d+/)) {
      score -= 30;
      reasons.push("Uses raw IP address");
    }

    if (url.match(/bit\.ly|tinyurl|t\.co/)) {
      score -= 20;
      reasons.push("Uses URL shortener");
    }

    if (score < 0) score = 0;

    return {
      url,
      status: score < 50 ? "dangerous" : "suspicious",
      score,
      reasons: reasons.length ? reasons : ["Heuristic analysis used"],
      errors
    };
  }

  // --- Aggregate real engine results ---
  let score = 100;
  const reasons = [];

  for (const result of engines) {
    if (result.malicious > 0) {
      score -= 40;
      reasons.push(`${result.engine}: malicious detected`);
    }
    if (result.suspicious > 0) {
      score -= 20;
      reasons.push(`${result.engine}: suspicious signals`);
    }
  }

  if (score < 0) score = 0;

  let status = "safe";
  if (score < 40) status = "dangerous";
  else if (score < 70) status = "suspicious";

  if (reasons.length === 0) {
    reasons.push("No threats detected by active engines");
  }

  return {
    url,
    status,
    score,
    reasons
  };
}
