import { sheets, SPREADSHEET_ID } from './sheetsClient.js';

// Get all courses from a tab (sheet)
export async function getCourseSheet(tabName) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${tabName}!A1:Z100`
  });
  // Convert rows to objects
  const [header, ...rows] = res.data.values;
  return rows.map(row =>
    Object.fromEntries(header.map((h, i) => [h, row[i] || '']))
  );
}

// Get single course by name (row where name matches)
export async function getCourseByName(tabName, courseName) {
  const courses = await getCourseSheet(tabName);
  return courses.find(c => c.name === courseName);
}

// Update course (by name)
export async function updateCourseByName(tabName, courseName, updates) {
  const courses = await getCourseSheet(tabName);
  const rowIdx = courses.findIndex(c => c.name === courseName);
  if (rowIdx === -1) return false;
  const header = Object.keys(courses[0]);
  // Prepare new row
  const updatedRow = header.map(h => updates[h] ?? courses[rowIdx][h]);
  // Write to sheet
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${tabName}!A${rowIdx + 2}:Z${rowIdx + 2}`,
    valueInputOption: "RAW",
    requestBody: { values: [updatedRow] }
  });
  return true;
}