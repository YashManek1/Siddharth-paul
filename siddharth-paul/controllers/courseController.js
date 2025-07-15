import { getCourseSheet, getCourseByName, updateCourseByName } from '../googleSheets/courseSheetUtils.js';

// GET /api/courses/:tabName
export const getCourses = async (req, res) => {
  try {
    const courses = await getCourseSheet(req.params.tabName);
    res.json(courses);
  } catch {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// GET /api/courses/:tabName/:name
export const getCourse = async (req, res) => {
  try {
    const course = await getCourseByName(req.params.tabName, req.params.name);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};

// PUT /api/courses/:tabName/:name
export const updateCourse = async (req, res) => {
  try {
    const success = await updateCourseByName(req.params.tabName, req.params.name, req.body);
    if (!success) return res.status(404).json({ error: 'Course not found' });
    res.json({ updated: true });
  } catch {
    res.status(500).json({ error: 'Failed to update course' });
  }
};