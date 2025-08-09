import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const hasPaid = localStorage.getItem("hasPaid") === "true";
  if (!hasPaid) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
