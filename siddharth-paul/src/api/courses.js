import axios from "axios";

export const fetchCourseData = async (tabName) => {
  const response = await axios.get(
    `https://siddharth-paul.onrender.com/courses/${encodeURIComponent(tabName)}`
  );
  return response.data;
};
