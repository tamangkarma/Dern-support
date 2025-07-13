import { useState } from "react";

export default function NewRequest({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, category });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
          New Support Request
        </h2>

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

        <label className="block mb-4 text-purple-800 font-medium">
          Category (optional)
        </label>
        <input
          type="text"
          className="w-full border border-purple-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="E.g. Laptop, AC repair"
        />

        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
