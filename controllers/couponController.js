import { sheets, SPREADSHEET_ID } from "../googleSheets/sheetsClient.js";

// Utility to get all rows from a sheet as objects
async function getAllRows(tabName) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${tabName}!A1:Z1000`,
  });
  const [header, ...rows] = res.data.values;
  return rows.map((row) =>
    Object.fromEntries(header.map((h, i) => [h, row[i] || ""]))
  );
}

export const discountCoupon = async (req, res) => {
  const { coupon, email } = req.body;
  if (!coupon || !email) {
    return res.json({ success: false, message: "Coupon and email required." });
  }
  if (coupon !== "FIRST20") {
    return res.json({ success: false, message: "Invalid coupon code." });
  }

  try {
    // Fetch all rows from ClientInfo sheet
    const rows = await getAllRows("ClientInfo");
    // Check if email already exists (case-insensitive) in "Email Address" column
    const emailExists = rows.some(
      (row) =>
        row["Email address"] &&
        row["Email address"].toLowerCase().trim() === email.toLowerCase().trim()
    );
    if (emailExists) {
      return res.json({
        success: false,
        message: "Coupon already used with this email.",
      });
    }
    // If not used, allow coupon
    return res.json({ success: true, discountPercent: 20 });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error." });
  }
};
