import "./AboutUs.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { aboutUsTranslations } from "./aboutUsTranslations";

function AboutUs({ lang = "cs" }) {
  return (
    <>
      <div className="logo-section">
        <img src="./src/assets/logo.png" alt="VELOOT" className="logo-img" />
      </div>

      <div className="socialsContainer">
        <h1 id="socialTitle">{aboutUsTranslations.socialTitle[lang]}</h1>
        <h3 id="socialsText">{aboutUsTranslations.socialsText[lang]}</h3>
        <div className="socialsIcons">
          <ul className="socialsLinks">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
            </li>
            <li>
              <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shopPhotosContainer">
        <h1 id="shopTitle">{aboutUsTranslations.shopTitle[lang]}</h1>
        <p id="shopText">{aboutUsTranslations.shopText[lang]}</p>
        <div className="shopPhotos">
          <img
            src="./src/assets/ShopPhotos/shop1.png"
            alt={`${aboutUsTranslations.shopAlt[lang]} 1`}
          />
          <img
            src="./src/assets/ShopPhotos/shop2.png"
            alt={`${aboutUsTranslations.shopAlt[lang]} 2`}
          />
          <img
            src="./src/assets/ShopPhotos/shop3.png"
            alt={`${aboutUsTranslations.shopAlt[lang]} 3`}
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
