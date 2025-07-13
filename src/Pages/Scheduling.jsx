import React, { useState } from "react";
import axios from "axios";

export default function SchedulePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/booking/book", {
        name,
        email,
        date,
      });

      alert("Booking created successfully!");
      console.log("Booking:", res.data.booking);

      // Clear form
      setName("");
      setEmail("");
      setDate("");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Error creating booking");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl text-purple-800 font-bold mb-6 text-center">Schedule an Appointment</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
