import React, { useState } from "react";
import { FaBell } from "react-icons/fa"; // Notification icon
import { FaTimes } from "react-icons/fa";
import NotificationPanel from "./NotificationPanel";


const Notifications = () => {
  const [clicked, setClicked] = useState(false);
 

  return (
    <div className = "notification-message-component ">
      <div className="notification-container">
        <div className="icons"  style={{border : clicked && ".2rem solid #9bedff"}}>
          <FaBell
            customprop="Notifications"
            //   onMouseOver={handleOver}
            //   onMouseOut={handleOverOut}
            onClick={() => {
              setClicked(true);
            }}

            
          />
        </div>
      </div>

      {clicked && (
        <div className="notification-popup">
          <div><h3 className="title text">Updates</h3>
          <span><FaTimes className="noti-cross-icon" onClick={()=>{
          setClicked(false)
        }} /> </span></div>
          <NotificationPanel notificationText= "More inspiration based on your interest in lock screen wallpaper" />
          <NotificationPanel notificationText= "Still searching? Explore ideas related to Cloud Png" />
          <NotificationPanel notificationText= "More inspiration based on your interest in jujutsu." />
        </div>
      )}
    </div>
  );
};

export default Notifications;
