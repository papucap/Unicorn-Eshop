import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar({ onSearch }) {
  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <Link to="/">NOVINKY</Link>
              </li>
              <li>
                <Link to="/products">BOTY</Link>
              </li>
              <li>
                <Link to="/products">OBLEČENÍ</Link>
              </li>
              <li>
                <Link to="/products">DOPLŇKY</Link>
              </li>
              <li>
                <Link to="/about">O NÁS</Link>
              </li>
            </ul>
          </nav>

          <div className="search-container">
            <input
              type="text"
              placeholder="Hledat..."
              className="search-input"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
