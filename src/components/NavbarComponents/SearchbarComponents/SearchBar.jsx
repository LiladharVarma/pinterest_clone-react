
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import RecentSearch from "./RecentSearch";

const SearchBar = (prop) => {
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("random");
  const [searched, setSearched] = useState(false);

  function handleChange(event) {
    setQuery(event.target.value);
    prop.onSearch(query, searched);
  }

  const handleClick = () => {
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="search-component">
      <div className="searchbar-container">
        <FaSearch className="search-icon" />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            onChange={handleChange}
            onClick={handleClick}
          />
        </form>
        {clicked && (
          <FaTimes
            className="cross-icon"
            onClick={() => {
              setClicked(false);
              setSearched(false);
            }}
          />
        )}
      </div>

      {clicked && (
        <div className="search-result-container">
          <div className="recent-search-container">
            <h4 className="title">Recent Searches</h4>
            <div className="history">
              <RecentSearch text="Sukuna 4k wallpaper" />
              <RecentSearch text="Nature HD wallpaper" />
              <RecentSearch text="Virat Kohli desktop photos" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
