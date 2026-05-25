import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <a href="/">NOVINKY</a>
              </li>
              <li>
                <a href="/products">BOTY</a>
              </li>
              <li>
                <a href="/contact">OBLEČENÍ</a>
              </li>
              <li>
                <a href="/about">DOPLŇKY</a>
              </li>
              <li>
                <a href="/about">INSPIRACE</a>
              </li>
            </ul>
          </nav>

          <div className="search-container">
            <input
              type="text"
              placeholder="Hledat..."
              className="search-input"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
