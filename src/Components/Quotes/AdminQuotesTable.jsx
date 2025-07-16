import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminQuotesTable = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem("user");
  const userparse = JSON.parse(user);
  const roleuser = userparse.Role.roleName;

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/post/getposts");
      setRequests(res.data);
    } catch (error) {
      console.error("Failed to fetch requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();

    const listener = () => fetchRequests();
    window.addEventListener("new-request", listener);

    return () => window.removeEventListener("new-request", listener);
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/post/${id}/approve`);
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: "approved" } : req
        )
      );
    } catch (err) {
      console.error("Approve error:", err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/post/${id}/reject`);
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: "rejected" } : req
        )
      );
    } catch (err) {
      console.error("Reject error:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quote?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/post/${id}`);
      setRequests((prev) => prev.filter((req) => req.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="overflow-x-auto p-4">
      <h3 className="text-xl font-bold text-purple-700 mb-4">
        Admin Quotes Table
      </h3>
      <table className="min-w-full border border-purple-300 rounded-lg overflow-hidden">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Created At
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Status
            </th>
            {roleuser === "Admin" && (
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-purple-200">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                {Array.from({ length: 6 }).map((_, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            requests.map((req) => (
              <tr key={req.id} className="hover:bg-purple-50">
                <td className="px-6 py-4">{req.title}</td>
                <td className="px-6 py-4">{req.description}</td>
                <td className="px-6 py-4">{req.category || "-"}</td>
                <td className="px-6 py-4">{formatDate(req.createdAt)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      req.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : req.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                {roleuser === "Admin" && (
                  <td className="px-6 py-4 space-x-2">
                    {req.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(req.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(req.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleDelete(req.id)}
                      className="px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminQuotesTable;
