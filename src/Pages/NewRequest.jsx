import { useState } from "react";
import axios from "axios";

export default function NewRequest() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:3000/post", {
        title,
        description,
        category,
      });

      console.log("Created:", res.data);

      setRequests((prev) => [...prev, res.data]);
      setTitle("");
      setDescription("");
      setCategory("");
    } catch (error) {
      console.error("Error creating request:", error);
      setError("Failed to submit request. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mb-8"
      >
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
          New Support Request
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
        )}

        <label className="block mb-2 text-purple-800 font-medium">
          Title / Subject
        </label>
        <input
          type="text"
          className="w-full border border-purple-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="E.g. My laptop won’t start"
        />

        <label className="block mb-2 text-purple-800 font-medium">
          Description
        </label>
        <textarea
          className="w-full border border-purple-300 rounded px-3 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Explain your problem"
        />

        <label
          htmlFor="category"
          className="block mb-4 text-purple-800 font-medium"
        >
          Category (optional)
        </label>
        <input
          id="category"
          type="text"
          className="w-full border border-purple-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="E.g. Laptop, AC repair"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-2 rounded transition ${
            loading
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800 text-white"
          }`}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      <div className="w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-purple-700">Submitted Requests:</h3>
        {requests.map((req) => (
          <div key={req.id} className="border border-purple-300 rounded p-4 mb-2">
            <h4 className="font-semibold">{req.title}</h4>
            <p>{req.description}</p>
            {req.category && (
              <span className="text-sm text-purple-600">{req.category}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
