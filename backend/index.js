import express from "express";
import cors from "cors";
import scanRouter from "./routes/scan.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ SINGLE scan entry point
app.use("/scan", scanRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
