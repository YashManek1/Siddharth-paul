import axios from "axios";

export const fetchCourseData = async (tabName) => {
  const response = await axios.get(
    `http://localhost:5000/courses/${encodeURIComponent(tabName)}`
  );
  return response.data;
};
