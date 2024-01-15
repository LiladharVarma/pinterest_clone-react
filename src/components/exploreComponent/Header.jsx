import React from "react";

const Header = () => {
  const date = new Date().getUTCDate();
  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();

  console.log(date);
  console.log(month);

  return (
    <div className="header">
      <div className="date-section">
      <h2>
        {month} {date}, {year}
      </h2>
      </div>
      <h1>Stay Inspired</h1>
    </div>
  );
};

export default Header;
