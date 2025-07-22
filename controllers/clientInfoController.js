import { addOrder } from "../googleSheets/orderSheetUtils.js";

export const submitClientInfo = async (req, res) => {
  try {
    const { fullName, email, contactInfo, address } = req.body;
    if (!fullName || !email || !contactInfo || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }
    await addOrder("ClientInfo", { fullName, email, contactInfo, address });
    res.json({ success: true });
  } catch (error) {
    console.error("Error submitting client info:", error);
    res.status(500).json({ error: "Failed to submit client info" });
  }
};
