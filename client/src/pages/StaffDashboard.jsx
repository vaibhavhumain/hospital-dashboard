import React, { useState, useEffect } from "react";

const StaffDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    shiftTiming: "",
    joiningDate: "",
    salary: "",
  });

  const [staffList, setStaffList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Staff member registered successfully!");

      // Reset form (without position)
      setFormData({
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        department: "",
        shiftTiming: "",
        joiningDate: "",
        salary: "",
      });

      fetchStaffList(); // Fetch updated list
    } catch (err) {
      console.error("Registration error:", err);
      alert("Error registering staff member");
    }
  };

  const fetchStaffList = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/staff");
      const data = await res.json();
      setStaffList(data);
    } catch (err) {
      console.error("Error fetching staff list:", err);
    }
  };

  useEffect(() => {
    fetchStaffList();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Staff Registration Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 shadow rounded">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="border p-2 rounded"
            type={field === "joiningDate" ? "date" : "text"}
          />
        ))}
        <button type="submit" className="col-span-1 md:col-span-2 bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Register Staff
        </button>
      </form>

      {/* Staff List */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Registered Staff Members</h3>
      <div className="bg-white shadow rounded p-4">
        {staffList.length === 0 ? (
          <p>No staff members registered yet.</p>
        ) : (
          <ul className="space-y-2">
            {staffList.map((staff, index) => (
              <li key={index} className="border p-2 rounded">
                <strong>{staff.name}</strong> — {staff.department}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;
