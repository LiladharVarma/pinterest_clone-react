import React from "react";
import { MdMoreVert } from "react-icons/md";

const NotificationPanel = ({ notificationText }) => {
  return (
    <div className="notification-content">
      {notificationText}{" "}
      <div className="noti-icon">
        <MdMoreVert />
      </div>
    </div>
  );
};

export default NotificationPanel;
