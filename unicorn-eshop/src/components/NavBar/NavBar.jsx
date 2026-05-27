import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ onSearch, lang = "cs" }) {
  const navLinks = [
    { label: { cs: "NOVINKY", en: "NEWS" }, url: "/" },
    { label: { cs: "BOTY", en: "SHOES" }, url: "/products" },
    { label: { cs: "OBLEČENÍ", en: "CLOTHING" }, url: "/products" },
    { label: { cs: "DOPLŇKY", en: "ACCESSORIES" }, url: "/products" },
    { label: { cs: "O NÁS", en: "ABOUT US" }, url: "/about" },
  ];

  const placeholders = {
    cs: "Hledat...",
    en: "Search...",
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <nav className="navbar">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label[lang]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="search-container">
          <input
            type="text"
            placeholder={placeholders[lang]}
            className="search-input"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
