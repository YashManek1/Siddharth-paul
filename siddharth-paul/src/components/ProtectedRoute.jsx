import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const paymentKeys = {
  "/afterpaymentgm": "hasPaid_gm",
  "/afterpaymentff": "hasPaid_ff",
  "/afterpaymentpm": "hasPaid_pm",
  "/afterpaymentov": "hasPaid_ov",
  "/afterpaymentrr": "hasPaid_rr",
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const key = paymentKeys[location.pathname];
  const hasPaid = key ? localStorage.getItem(key) === "true" : false;

  if (!hasPaid) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
