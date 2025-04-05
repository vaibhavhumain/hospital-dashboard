import React, { useState } from "react";

const FinanceDashboard = () => {
  const [formData, setFormData] = useState({
    date: "",
    type: "", // Revenue or Expense
    category: "",
    amount: "",
    description: "",
    responsiblePerson: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Transaction recorded successfully!");

      setFormData({
        date: "",
        type: "",
        category: "",
        amount: "",
        description: "",
        responsiblePerson: "",
      });
    } catch (err) {
      alert("Error recording transaction");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Finance Entry Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="date" name="date" onChange={handleChange} value={formData.date} className="input" />
        <select name="type" onChange={handleChange} value={formData.type} className="input">
          <option value="">Select Type</option>
          <option value="Revenue">Revenue</option>
          <option value="Expense">Expense</option>
        </select>
        <input name="category" placeholder="Category (e.g. Medicines, Salary, Donation)" onChange={handleChange} value={formData.category} className="input" />
        <input name="amount" placeholder="Amount" type="number" onChange={handleChange} value={formData.amount} className="input" />
        <input name="responsiblePerson" placeholder="Responsible Person" onChange={handleChange} value={formData.responsiblePerson} className="input" />
        <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} className="input md:col-span-2" />

        <button type="submit" className="col-span-1 md:col-span-2 bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition">
          Record Transaction
        </button>
      </form>
    </div>
  );
};

export default FinanceDashboard;
