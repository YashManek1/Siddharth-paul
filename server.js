import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import courseRoutes from "./routes/courseRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import clientInfoRoutes from "./routes/clientInfoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/courses", courseRoutes);
app.use("/payment", paymentRoutes);
app.use("/api/client-info", clientInfoRoutes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong", time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
