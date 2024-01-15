import React, { useState } from "react";


import { FaUserCircle } from "react-icons/fa"; // Profile icon


import SearchBar from "../NavbarComponents/SearchbarComponents/SearchBar";
import Notifications from "./NotificationComponents/Notifications";
import Message from "./MessageComponent/Message";
import {NavLink } from "react-router-dom";

import pinLogo from "./pinLogo/pinLogo.jpeg"

const Navbar = ({onHeld}) => {

  // const [isVisible, setVisible] = useState(false);
  const [searched, setSearched] = useState(false);
  const [text, setText] = useState("");

  const [queryFromSearchBar , setQuery] = useState("");

  const  getData = (inputText, isSearched) => {
    setQuery(inputText);
    setSearched(isSearched);
    // console.log("This query is from navbar ",queryFromSearchBar)
    onHeld(queryFromSearchBar, searched);
  }

  const handleOver = (event) => {
    const customPropValue = event.currentTarget.getAttribute("customprop");
    setText(customPropValue);
    console.log(text);
    // setVisible(true);
  }

  const handleOverOut = () => {
    // setVisible(false);
  }

  return (
    <div className="navbar-container">
      <ul className="nav-items">
        <li className="pin-icon">
          {/* <FaPinterest /> */}
          <img src={pinLogo}  alt="logo" />
        </li>
        <li>
          <NavLink className="item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to="/explore">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink className="item">
            Create
          </NavLink>
        </li>
      </ul>
      <div>
        <div>
          <SearchBar onSearch = {getData} />
        </div>
      </div>
      <div className="icons-container">
        <div>
          <Notifications />
        </div>
        <div>
          <Message />
        </div>
        <div className="icons">
          <FaUserCircle
            customprop="Profile"
            onMouseOver={handleOver}
            onMouseOut={handleOverOut}
          />
        </div>

        {/* <span> {isVisible && <Tooltip  text = {text} />}</span> */}
      </div>
    </div>
  );
};

export default Navbar;
