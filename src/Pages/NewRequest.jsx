import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const NewRequest = () => {
  const [requests, setRequests] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/post/getposts");
        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchRequestData();
  }, []);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost:3000/post/createPost",
        data
      );
      setRequests((prev) => [...prev, res.data]);
      reset();
      setSuccessMessage("Request submitted successfully!");
      window.dispatchEvent(new Event("new-request"));

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error creating request:", error);
      setError("Failed to submit request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mb-8"
      >
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
          New Support Request
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
        )}

        {successMessage && (
          <p className="text-green-600 mb-4 text-center font-medium">
            {successMessage}
          </p>
        )}

        <label className="block mb-2 text-purple-800 font-medium">
          Title / Subject
        </label>
        <input
          type="text"
          className="w-full border border-purple-300 rounded px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="E.g. My laptop won’t start"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
        )}

        <label className="block mb-2 text-purple-800 font-medium">
          Description
        </label>
        <textarea
          className="w-full border border-purple-300 rounded px-3 py-2 mb-1 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          placeholder="Explain your problem"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mb-2">
            {errors.description.message}
          </p>
        )}

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
          placeholder="E.g. Laptop, AC repair"
          {...register("category")}
        />

        <button
          type="submit"
          disabled={submitting}
          className={`w-full font-semibold py-2 rounded transition ${
            submitting
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800 text-white"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      <div className="w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-purple-700">
          Submitted Requests:
        </h3>

        {fetching ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-700 border-solid"></div>
            <p className="mt-4 text-purple-700 font-medium">Loading requests...</p>
          </div>
        ) : requests.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 bg-white border border-dashed border-purple-300 rounded-lg">
            <svg
              className="w-12 h-12 text-purple-400 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 font-medium">
              No requests yet.
            </p>
          </div>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="border border-purple-300 bg-white rounded p-4 mb-2 shadow-sm"
            >
              <h4 className="font-semibold text-purple-800">{req.title}</h4>
              <p className="text-gray-700">{req.description}</p>
              {req.category && (
                <span className="text-sm text-purple-600">{req.category}</span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewRequest;
