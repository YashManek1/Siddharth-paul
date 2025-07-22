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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
