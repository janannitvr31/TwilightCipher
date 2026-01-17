import express from "express";
import { scanURL } from "../services/scanEngine.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL required" });
  }

  try {
    const result = await scanURL(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Scan failed", details: err.message });
  }
});

export default router;

