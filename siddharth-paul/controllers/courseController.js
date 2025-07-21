import { getCourseSheet } from "../googleSheets/courseSheetUtils.js";
import { sheets, SPREADSHEET_ID } from "../googleSheets/sheetsClient.js";

// GET /courses/:tabName
export const getCourse = async (req, res) => {
  try {
    const courses = await getCourseSheet(req.params.tabName);
    if (!courses.length)
      return res.status(404).json({ error: "Course not found" });
    res.json(courses[0]); // Return the only row (course details)
  } catch (error) {
    console.error("Error fetching course:", error);
    return res.status(500).json({ error: "Failed to fetch course" });
  }
};
