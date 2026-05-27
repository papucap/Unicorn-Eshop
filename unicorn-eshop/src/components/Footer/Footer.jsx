import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function UnorderedList({ className = "", items = [] }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            target={item.target || "_self"}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {item.label || item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  const infoLinks = [
    { label: "O nás", url: "/about" },
    { label: "Kontakt", url: "/contact" },
    { label: "Q&A", url: "/about" },
    { label: "Reklamace", url: "/contact" },
  ];

  const shopLinks = [
    { label: "Oblečení", url: "/products" },
    { label: "Boty", url: "/products" },
    { label: "Doplňky", url: "/products" },
    { label: "Novinky", url: "/" },
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
        <img src="./src/assets/logo.png" alt="Unicorn Eshop Logo" />
      </div>

      <div className="info-links">
        <h3>Informace</h3>
        <UnorderedList className="info-links-list" items={infoLinks} />
      </div>

      <div className="shop-links">
        <h3>Obchod</h3>
        <UnorderedList className="shop-links-list" items={shopLinks} />
      </div>

      <div className="socials-links">
        <UnorderedList className="socials-links-list" items={socialLinks} />
      </div>

      <div className="copyright">
        <p>© 2024 Unicorn Eshop. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}

export default Footer;
