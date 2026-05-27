import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Header.css";

function Header({ lang = "cs", setLang }) {
  const menuLinks = [
    { label: { cs: "Vše", en: "All" }, url: "/products" },
    { label: { cs: "Muži", en: "Men" }, url: "/products/men" },
    { label: { cs: "Ženy", en: "Women" }, url: "/products/women" },
    { label: { cs: "Děti", en: "Kids" }, url: "/about" },
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
              <a href={link.url}>{link.label[lang]}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="logo">
        <img src="/src/assets/logo.png" alt="Unicorn Eshop Logo" />
      </div>

      <div className="more">
        <ul>
          <li>
            <a href="/profile">
              <AccountCircleIcon />
            </a>
          </li>
          <li>
            <Link to="/cart">
              <LocalMallIcon />
            </Link>
          </li>
          <li>
            <a href="/likes">
              <FavoriteBorderIcon />
            </a>
          </li>

          <li>
            <button
              className="lang-switcher-btn"
              onClick={() => setLang(lang === "cs" ? "en" : "cs")}
            >
              {langToggleText[lang]}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
