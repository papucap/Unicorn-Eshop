import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

// UnorderedList teď přijímá lang a dynamicky vypisuje správný překlad
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
  // Nadpisy sekcí a statické texty
  const translations = {
    infoTitle: { cs: "Informace", en: "Information" },
    shopTitle: { cs: "Obchod", en: "Shop" },
    copyright: {
      cs: "© 2024 Unicorn Eshop. Všechna práva vyhrazena.",
      en: "© 2024 Unicorn Eshop. All rights reserved.",
    },
  };

  const infoLinks = [
    { label: { cs: "O nás", en: "About Us" }, url: "/about" },
    { label: { cs: "Kontakt", en: "Contact" }, url: "/contact" },
    { label: { cs: "Q&A", en: "Q&A" }, url: "/about" },
    { label: { cs: "Reklamace", en: "Claims" }, url: "/contact" },
  ];

  const shopLinks = [
    { label: { cs: "Oblečení", en: "Clothing" }, url: "/products" },
    { label: { cs: "Boty", en: "Shoes" }, url: "/products" },
    { label: { cs: "Doplňky", en: "Accessories" }, url: "/products" },
    { label: { cs: "Novinky", en: "News" }, url: "/" },
  ];

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
        <h3>{translations.infoTitle[lang]}</h3>
        <UnorderedList
          className="info-links-list"
          items={infoLinks}
          lang={lang}
        />
      </div>

      <div className="shop-links">
        <h3>{translations.shopTitle[lang]}</h3>
        <UnorderedList
          className="shop-links-list"
          items={shopLinks}
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
        <p>{translations.copyright[lang]}</p>
      </div>
    </footer>
  );
}

export default Footer;
