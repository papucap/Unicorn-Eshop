import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo">
          <img src="./src/assets/logo.png" alt="Unicorn Eshop Logo" />
        </div>

        <div className="info-links">
          <h3>Informace</h3>

          <ul className="info-links-list">
            <li>
              <Link to="/about">O nás</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <a href="/about">Q&A</a>
            </li>
            <li>
              <a href="/about">Reklamace</a>
            </li>
          </ul>
        </div>

        <div className="shop-links">
          <h3>Obchod</h3>
          <ul className="shop-links-list">
            <li>
              <a href="/">Oblečení</a>
            </li>
            <li>
              <a href="/">Boty</a>
            </li>
            <li>
              <a href="/">Doplňky</a>
            </li>
            <li>
              <a href="/">Novinky</a>
            </li>
          </ul>
        </div>

        <div className="socials-links">
          <ul className="socials-links-list">
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <YouTubeIcon />
              </a>
            </li>
            <li>
              <a href="https://www.x.com/" target="_blank">
                <XIcon />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>© 2024 Unicorn Eshop. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
