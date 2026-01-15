import express from "express";
import { scanWithVirusTotal } from "../services/virusTotal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const stats = await scanWithVirusTotal(url);

    const malicious = stats.malicious || 0;
    const suspicious = stats.suspicious || 0;
    const harmless = stats.harmless || 0;

    let score = Math.max(
      0,
      100 - malicious * 40 - suspicious * 20
    );

    let status =
      malicious > 0
        ? "dangerous"
        : suspicious > 0
        ? "suspicious"
        : "safe";

    res.json({
      url,
      status,
      score,
      reasons: [
        `${malicious} malicious detections`,
        `${suspicious} suspicious detections`,
        `${harmless} harmless sources`
      ]
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Scan failed" });
  }
});

export default router;
