import React from "react";

function Header({ title }) {
  return (
    <nav  className="navbar   navbar-expand-lg    navbar-dark bg-primary  justify-content-between">
      <div className="container">
        <h1>
          {title}
        </h1>
      </div>
    </nav>
  );
}

export default Header;
