import express from 'express';
import { getCourses, getCourse, updateCourse } from '../controllers/courseController.js';

const router = express.Router();

// Get all courses from a tab
router.get('/:tabName', getCourses);

// Get single course (by name) from a tab
router.get('/:tabName/:name', getCourse);

// Update course in tab
router.put('/:tabName/:name', updateCourse);

export default router;