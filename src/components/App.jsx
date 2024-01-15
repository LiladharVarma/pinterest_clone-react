import React, { useState } from "react";
import Navbar from "./NavbarComponents/Navbar";
import ImagesContainer from "./BodyComponents/ImagesContainer";


const App = () => {
  const [searchQuery, setSearchQuery] = useState("random");
  const [searchClicked, setSearchClicked] = useState(false);

  const getQueryFromNavbar = (inputText, searchStatus) => {
    setSearchQuery(inputText);
    setSearchClicked(searchStatus);
    // console.log("Query From App Component", searchQuery);
  };
//   console.log(searchClicked);
  return (
    <div className="main-container">
      <Navbar onHeld={getQueryFromNavbar} />
      <ImagesContainer searchFor={searchQuery} isClicked={searchClicked} />
    </div>
  );
};

export default App;
