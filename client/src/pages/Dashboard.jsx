import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Dashboard Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => navigate("/dashboard/patients")}
          className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-600"
        >
          Patient Dashboard
        </button>
        <button
          onClick={() => navigate("/dashboard/staff")}
          className="bg-green-500 text-white px-6 py-4 rounded-lg shadow hover:bg-green-600"
        >
          Staff Dashboard
        </button>
        <button
          onClick={() => navigate("/dashboard/finance")}
          className="bg-purple-500 text-white px-6 py-4 rounded-lg shadow hover:bg-purple-600"
        >
          Finance Dashboard
        </button>
      </div>

      {/* Links below each button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
        <Link to="/patients" className="text-blue-600 underline">
          View Registered Patients
        </Link>
        <Link to="/staff" className="text-green-600 underline">
          View All Staff
        </Link>
        <Link to="/finance" className="text-purple-600 underline">
          View Finance Details
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
