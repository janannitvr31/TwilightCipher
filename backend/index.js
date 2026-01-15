import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import scanRoute from "./routes/scan.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TwilightCipher backend running");
});

app.use("/scan", scanRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

