import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { footerTranslations } from "./footerTranslations.js";

function UnorderedList({ className = "", items = [], lang = "cs" }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            target={item.target || "_self"}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {item.label ? item.label[lang] : item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Footer({ lang = "cs" }) {
  const socialLinks = [
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/",
      target: "_blank",
    },
    {
      icon: <YouTubeIcon />,
      url: "https://www.youtube.com/",
      target: "_blank",
    },
    { icon: <XIcon />, url: "https://www.x.com/", target: "_blank" },
    {
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/",
      target: "_blank",
    },
  ];

  return (
    <footer className="footer">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="Unicorn Eshop Logo" />
      </div>

      <div className="info-links">
        <h3>{footerTranslations.infoTitle[lang]}</h3>
        <UnorderedList
          className="info-links-list"
          items={footerTranslations.infoLinks}
          lang={lang}
        />
      </div>

      <div className="shop-links">
        <h3>{footerTranslations.shopTitle[lang]}</h3>
        <UnorderedList
          className="shop-links-list"
          items={footerTranslations.shopLinks}
          lang={lang}
        />
      </div>

      <div className="socials-links">
        <UnorderedList
          className="socials-links-list"
          items={socialLinks}
          lang={lang}
        />
      </div>

      <div className="copyright">
        <p>{footerTranslations.copyright[lang]}</p>
      </div>
    </footer>
  );
}

export default Footer;
