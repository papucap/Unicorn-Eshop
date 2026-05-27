import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import "./Header.css";

function Header({ lang = "cs", setLang }) {
  const menuLinks = [
    { label: { cs: "Vše", en: "All" }, url: "/products" },
    { label: { cs: "Muži", en: "Men" }, url: "/products/men" },
    { label: { cs: "Ženy", en: "Women" }, url: "/products/women" },
    { label: { cs: "Děti", en: "Kids" }, url: "https://www.kinder.com/cz/cs/" },
  ];

  const langToggleText = {
    cs: "EN",
    en: "CZ",
  };

  return (
    <header>
      <div className="links">
        <ul>
          {menuLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.label[lang]}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="logo">
        <Link to = '/'>
          <img src="/src/assets/logo.png" alt="Unicorn Eshop Logo" />
        </Link>
      </div>

      <div className="more">
        <ul>
          <li>
            <Link to="/profile">
              <AccountCircleIcon />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <LocalMallIcon />
            </Link>
          </li>
          <li>
            <button
              className="lang-btn"
              className="lang-switcher-btn"
              onClick={() => setLang(lang === "cs" ? "en" : "cs")}
            >
              <GTranslateIcon />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
