import { scanWithVirusTotal } from "./virusTotal.js";
import { scanWithGoogleSafeBrowsing } from "./googleSafeBrowsing.js";

export async function scanURL(url) {
  const results = [];
  const errors = [];

  // Try VirusTotal
  if (process.env.VIRUSTOTAL_API_KEY) {
    try {
      const vt = await scanWithVirusTotal(url);
      results.push(vt);
    } catch (e) {
      errors.push({ engine: "VirusTotal", error: e.message });
    }
  }

  // Try Google Safe Browsing
  if (process.env.GOOGLE_SAFE_BROWSING_API_KEY) {
    try {
      const gsb = await scanWithGoogleSafeBrowsing(url);
      results.push(gsb);
    } catch (e) {
      errors.push({ engine: "Google Safe Browsing", error: e.message });
    }
  }

  // If no engines worked
  if (results.length === 0) {
    return {
      url,
      status: "unknown",
      score: 0,
      message: "Scan engines unavailable",
      errors,
    };
  }

  // Merge results (simple + reliable)
  let score = 100;
  let status = "safe";
  const reasons = [];

  for (const r of results) {
    score = Math.min(score, r.score);
    if (r.status === "dangerous") status = "dangerous";
    if (r.reasons) reasons.push(...r.reasons);
  }

  return {
    url,
    status,
    score,
    reasons,
  };
}
