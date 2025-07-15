import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = localStorage.getItem("user");
  const userparse  = JSON.parse(role);
  const roleuser = userparse.Role.roleName;

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("No token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Your Profile</h1>

      {loading ? (
        <div className="flex justify-center items-center space-x-3 text-gray-500">
          <svg
            className="w-6 h-6 text-indigo-400 animate-spin"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="text-lg">Loading your profile...</span>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center font-medium">{error}</p>
      ) : (
        user && (
          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-5xl font-bold select-none shadow-md">
                {user.firstName?.[0]?.toUpperCase()}
                {user.lastName?.[0]?.toUpperCase()}
              </div>
            </div>

            {/* User info */}
            <div className="space-y-4">
              <InfoRow label="First Name" value={user.firstName} />
              <InfoRow label="Last Name" value={user.lastName} />
              <InfoRow label="Email" value={user.email} />
              <InfoRow label="Role" value={roleuser}/>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-200 pb-2">
    <span className="text-gray-600 font-medium">{label}:</span>
    <span className="text-gray-900">{value || "-"}</span>
  </div>
);

export default Profile;
