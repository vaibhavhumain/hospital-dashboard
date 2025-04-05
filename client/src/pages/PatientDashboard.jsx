import React, { useState } from "react";

const PatientDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    admissionDate: "",
    symptoms: "",
    diagnosis: "",
    doctor: "",
    room: "",
    insurance: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log("Response from backend:", data); // Debugging line
  
      alert(data.message || "Patient registered successfully!"); // Show fallback message if undefined
  
      // Reset form after success
      setFormData({
        name: "", age: "", gender: "", email: "", phone: "", address: "",
        admissionDate: "", symptoms: "", diagnosis: "", doctor: "",
        room: "", insurance: "", emergencyContactName: "", emergencyContactPhone: ""
      });
    } catch (err) {
      console.error("Registration error:", err); // Log the error
      alert("Error registering patient");
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Registration Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
        <input name="age" placeholder="Age" onChange={handleChange} className="input" />
        <input name="gender" placeholder="Gender" onChange={handleChange} className="input" />
        <input name="email" placeholder="Email" onChange={handleChange} className="input" />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" />
        <input name="address" placeholder="Address" onChange={handleChange} className="input" />
        <input name="admissionDate" type="date" placeholder="Admission Date" onChange={handleChange} className="input" />
        <input name="symptoms" placeholder="Symptoms" onChange={handleChange} className="input" />
        <input name="diagnosis" placeholder="Diagnosis" onChange={handleChange} className="input" />
        <input name="doctor" placeholder="Assigned Doctor" onChange={handleChange} className="input" />
        <input name="room" placeholder="Room Number" onChange={handleChange} className="input" />
        <input name="insurance" placeholder="Insurance Provider" onChange={handleChange} className="input" />
        <input name="emergencyContactName" placeholder="Emergency Contact Name" onChange={handleChange} className="input" />
        <input name="emergencyContactPhone" placeholder="Emergency Contact Phone" onChange={handleChange} className="input" />

        <button type="submit" className="col-span-1 md:col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Register Patient
        </button>
      </form>
    </div>
  );
};

export default PatientDashboard;
