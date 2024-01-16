import React, { useState } from "react";
import { FaTimes, FaEnvelope } from "react-icons/fa"; // Message icon
import { FaSearch } from "react-icons/fa";
import { FaEdit } from 'react-icons/fa';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Message = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="notification-message-component">
      <div className="icons">
        <FaEnvelope
          onClick={() => {
            setClicked(true);
          }}
        />
      </div>

      {clicked && (
        <div className="notification-popup">
          <div>
            <h3 className="title text">Inbox</h3>
            <span>
              <FaTimes
                className="noti-cross-icon"
                onClick={() => {
                  setClicked(false);
                }}
              />{" "}
            </span>
          </div>
          <div className="message-container">
            <div className="message-content">
              <FaSearch className="icon-message" />
              <input type="text" placeholder="Search by name or email" />
            </div>
            <div className="message-field">
            <div className="field-icon-message"><FaEdit /></div>
              <div> <p>New Message</p></div>
            </div>
            <div className="message-field">
              <div className="field-icon-message"><PersonAddAlt1Icon /></div>
              <div> <p>Invite your friend</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
