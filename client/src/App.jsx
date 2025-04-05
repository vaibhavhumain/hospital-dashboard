import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AllPatients from "./pages/AllPatients";
import StaffDashboard from "./pages/StaffDashboard";
import FinanceDashboard from "./pages/FinanceDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import StaffList from "./pages/StaffList";
import FinanceList from "./pages/FinanceList";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
        <Route path="/dashboard/finance" element={<FinanceDashboard />} />
        <Route path="/dashboard/patients" element={<PatientDashboard />} />
        <Route path="/patients" element={<AllPatients />} />
        <Route path="/staff" element={<StaffList />} />
        <Route path="/finance" element={<FinanceList />} />
      </Routes>
    </Router>
  );
}

export default App;
