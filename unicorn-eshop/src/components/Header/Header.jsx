import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="links">
        <ul>
          <li>
            <a href="/products">Vše</a>
          </li>
          <li>
            <a href="/products/men">Muži</a>
          </li>
          <li>
            <a href="/products/women">Ženy</a>
          </li>
          <li>
            <a href="/about">Děti</a>
          </li>
        </ul>
      </div>

      <div className="logo">
        <img src="/src/assets/logo.png" alt="Unicorn Eshop Logo" />
      </div>

      <div className="more">
        <ul>
          <li>
            <a href={localStorage.getItem('currentUser') ? "/profile" : "/login"}>
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
        </ul>
      </div>
    </header>
  );
}

export default Header;
