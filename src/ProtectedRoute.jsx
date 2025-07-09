// src/ProtectedRoute.jsx

import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  // Check if the user has an access token
  const isAuthenticated = localStorage.getItem("accessToken");

  // If authenticated, render children inside Outlet
  // Else, redirect to /login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
