
import React from "react";

const ExploreCard = ({ id, url, title, description }) => {
  return (
    <div className="explore-card">
      <div className="explore-image">
        <img src={url} alt ="explore Images" />
        
      </div>

      <div className="explore-content">
      
          <h3>{title}</h3>
          <h2>{description}</h2>
      
        </div>
    </div>
  );
};

export default ExploreCard;
