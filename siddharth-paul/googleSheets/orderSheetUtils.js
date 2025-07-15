import { sheets, SPREADSHEET_ID } from './sheetsClient.js';

// Add new order/client info row
export async function addOrder(tabName, order) {
  const values = Object.values(order);
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${tabName}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [values] }
  });
  return true;
}