import React, { useState } from "react";
import { FaEllipsisV, FaDownload } from "react-icons/fa";

const Card = (props)  => {
  const [isOver, setOver] = useState(false);

  const handleOver = () => {
    setOver(true);
  }

  const handleLeave = () => {
    setOver(false);
  }

  return (
    <div
      className="card"
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
      onClick={(event) => {
        props.onChecked(event);
      }}
    >
      <div className="image-container">
        <img src={props.url} alt="Images" />

        {isOver && (
          <div className="image-icons">
            <div className="i-icons save">
              <button className="save-btn">Save</button>
            </div>
            <div className="i-icons bottom-icon download">
              <FaDownload />
            </div>
            <div className="i-icons bottom-icon  ellipsis">
              <FaEllipsisV />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
