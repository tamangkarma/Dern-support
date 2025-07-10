import { useState } from "react";

export const SettingsForm = () => {
  const [settings, setSettings] = useState({
    storeName: "",
    storeDescription: "",
    contactEmail: "",
    emailNotifications: true,
    lowStockAlerts: true,
    showOutOfStock: false,
    maintenanceMode: false,
    currency: "USD",
    shippingOption: "standard",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving settings:", settings);
    // Here you’d usually send `settings` to your backend
    // including uploading the file via FormData
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Store Name */}
      <div>
        <label className="block text-sm mb-1">Store Name</label>
        <input
          type="text"
          name="storeName"
          value={settings.storeName}
          onChange={handleChange}
          placeholder="Your store name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      {/* Store Description */}
      <div>
        <label className="block text-sm mb-1">Store Description</label>
        <textarea
          name="storeDescription"
          value={settings.storeDescription}
          onChange={handleChange}
          placeholder="Brief description of your store"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      {/* Contact Email */}
      <div>
        <label className="block text-sm mb-1">Contact Email</label>
        <input
          type="email"
          name="contactEmail"
          value={settings.contactEmail}
          onChange={handleChange}
          placeholder="owner@example.com"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      {/* Store Logo Upload */}
      <div>
        <label className="block text-sm mb-1">Store Logo</label>
        <input
          type="file"
          name="logo"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
        {settings.logo && (
          <p className="text-xs mt-1 text-gray-600">Selected: {settings.logo.name}</p>
        )}
      </div>

      {/* Email Notifications */}
      <div className="flex justify-between items-center">
        <label className="text-sm">Email Notifications</label>
        <input
          type="checkbox"
          name="emailNotifications"
          checked={settings.emailNotifications}
          onChange={handleChange}
        />
      </div>

      {/* Low Stock Alerts */}
      <div className="flex justify-between items-center">
        <label className="text-sm">Low Stock Alerts</label>
        <input
          type="checkbox"
          name="lowStockAlerts"
          checked={settings.lowStockAlerts}
          onChange={handleChange}
        />
      </div>

      {/* Show Out of Stock */}
      <div className="flex justify-between items-center">
        <label className="text-sm">Show Out of Stock Products</label>
        <input
          type="checkbox"
          name="showOutOfStock"
          checked={settings.showOutOfStock}
          onChange={handleChange}
        />
      </div>

      {/* Maintenance Mode */}
      <div className="flex justify-between items-center">
        <label className="text-sm">Enable Maintenance Mode</label>
        <input
          type="checkbox"
          name="maintenanceMode"
          checked={settings.maintenanceMode}
          onChange={handleChange}
        />
      </div>

      {/* Currency */}
      <div>
        <label className="block text-sm mb-1">Currency</label>
        <select
          name="currency"
          value={settings.currency}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="USD">USD</option>
          <option value="NPR">NPR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {/* Shipping Option */}
      <div>
        <label className="block text-sm mb-1">Shipping Option</label>
        <select
          name="shippingOption"
          value={settings.shippingOption}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="pickup">In-Store Pickup</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Save Changes
      </button>
    </form>
  );
};
