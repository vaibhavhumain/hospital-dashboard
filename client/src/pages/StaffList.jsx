import React, { useEffect, useState } from "react";

const StaffList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/staff");
        const data = await res.json();
        setStaff(data);
      } catch (err) {
        console.error("Failed to fetch staff:", err);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">All Staff Members</h2>
      {staff.length === 0 ? (
        <p className="text-center">No staff data found.</p>
      ) : (
        <ul className="space-y-4">
          {staff.map((member, index) => (
            <li key={index} className="border p-4 rounded bg-gray-100">
              <p><strong>Name:</strong> {member.name}</p>
              <p><strong>Contact:</strong> {member.phone}</p>
              <p><strong>Email:</strong> {member.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StaffList;
