import React from "react";

import { FaTimes } from "react-icons/fa";
const  RecentSearch = (props) => {

    return (
        
        <div className="recent-items-container">
          <div className="recent-items">{props.text}<FaTimes /></div>
        </div>

    ) ; 
}


export default RecentSearch ; 