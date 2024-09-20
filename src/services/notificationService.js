import api from "./apiService";

const fetchNotifications = () => {
  return api.get("/notifications");
};

const markAsRead = (notificationId) => {
  return api.put(`/notifications/${notificationId}`);
};

export default {
  fetchNotifications,
  markAsRead,
};
