// src/Components/NotificationPanel.jsx
import { useNotification } from "../contexts/NotificationContext";

const NotificationPanel = () => {
  const { notifications, removeNotification, isOpen, togglePanel } = useNotification();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg border-l border-gray-300 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Notifications</h2>
        <button onClick={togglePanel} className="text-xl">&times;</button>
      </div>
      <div className="p-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications</p>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{n.message}</span>
              <button
                onClick={() => removeNotification(n.id)}
                className="text-red-500 text-sm"
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
