import React from "react";
import ProtecteRoute from "../HOC/protectedRoute";

const dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl">Welcome! This is the Dashboard</h1>
    </div>
  );
};

export default ProtecteRoute(dashboard);
