import React, { useEffect, useState } from "react";

const FinanceList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchFinance = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/finance");
        const data = await res.json();
        setRecords(data);
      } catch (err) {
        console.error("Failed to fetch finance records:", err);
      }
    };

    fetchFinance();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Finance Records</h2>
      {records.length === 0 ? (
        <p className="text-center">No finance records found.</p>
      ) : (
        <ul className="space-y-4">
          {records.map((record, index) => (
            <li key={index} className="border p-4 rounded bg-gray-100">
              <p><strong>Department:</strong> {record.department}</p>
              <p><strong>Amount:</strong> ₹{record.amount}</p>
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Description:</strong> {record.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FinanceList;
