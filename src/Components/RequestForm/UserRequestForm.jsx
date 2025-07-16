import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const UserRequestForm = ({ onNewRequest }) => {
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
      const res = await axios.post("http://localhost:3000/post/createPost", data);
      setRequests((prev) => [...prev, res.data]);
      reset();
      setSuccessMessage("Request submitted successfully!");
      if (onNewRequest) onNewRequest();
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error creating request:", error);
      setError("Failed to submit request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 flex items-start justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        {/* Request Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-md p-6 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
            New Support Request
          </h2>

          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-600 mb-4 text-center">{successMessage}</p>
          )}

          {/* Title */}
          <label className="block mb-2 font-medium">Title / Subject</label>
          <input
            type="text"
            placeholder="E.g. My laptop won’t start"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
          )}

          {/* Description */}
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            rows={4}
            placeholder="Explain your problem"
            {...register("description", { required: "Description is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-1 resize-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mb-2">{errors.description.message}</p>
          )}

          {/* Category */}
          <label className="block mb-2 font-medium">Category (optional)</label>
          <input
            type="text"
            placeholder="E.g. Laptop, AC repair"
            {...register("category")}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          />

          <button
            type="submit"
            disabled={submitting}
            className={`w-full font-semibold py-2 rounded ${
              submitting
                ? "bg-purple-400"
                : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        {/* Submitted Requests */}
        <div className="w-full max-w-md overflow-y-auto max-h-[80vh]">
          <h3 className="text-xl font-bold mb-4 text-purple-700 text-center md:text-left">
            Submitted Requests
          </h3>

          {fetching ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="border border-purple-200 bg-white rounded p-4 shadow-sm"
                >
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : requests.length === 0 ? (
            <p className="text-center text-gray-500">No requests yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="border border-purple-300 bg-white rounded p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-purple-800">{req.title}</h4>
                  <p className="text-gray-700">{req.description}</p>
                  {req.category && (
                    <p className="text-sm text-purple-500">{req.category}</p>
                  )}
                  <span
                    className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                      req.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : req.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Status: {req.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserRequestForm;
