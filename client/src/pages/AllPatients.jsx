import React, { useEffect, useState } from "react";

const AllPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const res = await fetch("http://localhost:5000/api/patients");
      const data = await res.json();
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registered Patients</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p._id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.age}</td>
              <td className="border p-2">{p.gender}</td>
              <td className="border p-2">{p.phone}</td>
              <td className="border p-2">{p.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPatients;
