import "./AboutUs.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function AboutUs({ lang = "cs" }) {
  const translations = {
    socialTitle: {
      cs: "TISÍCE SPOKOJENÝCH ZÁKAZNÍKŮ",
      en: "THOUSANDS OF SATISFIED CUSTOMERS",
    },
    socialsText: {
      cs: "PŘESVĚDČTE SE SAMI NA NAŠICH SOCIÁLNÍCH SÍTÍCH",
      en: "SEE FOR YOURSELF ON OUR SOCIAL MEDIA",
    },
    shopTitle: {
      cs: "KAMENNÁ POBOČKA V PRAZE",
      en: "OUR BRICK-AND-MORTAR STORE IN PRAGUE",
    },
    shopText: {
      cs: "NA PŘÍKOPĚ, 110 00",
      en: "NA PRIKOPE, 110 00",
    },
    shopAlt: {
      cs: "Fotka obchodu",
      en: "Shop photo",
    },
  };

  return (
    <>
      <div className="logo-section">
        <img src="./src/assets/logo.png" alt="VELOOT" className="logo-img" />
      </div>

      <div className="socialsContainer">
        <h1 id="socialTitle">{translations.socialTitle[lang]}</h1>
        <h3 id="socialsText">{translations.socialsText[lang]}</h3>
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
        <h1 id="shopTitle">{translations.shopTitle[lang]}</h1>
        <p id="shopText">{translations.shopText[lang]}</p>
        <div className="shopPhotos">
          <img
            src="./src/assets/ShopPhotos/shop1.png"
            alt={`${translations.shopAlt[lang]} 1`}
          ></img>
          <img
            src="./src/assets/ShopPhotos/shop2.png"
            alt={`${translations.shopAlt[lang]} 2`}
          ></img>
          <img
            src="./src/assets/ShopPhotos/shop3.png"
            alt={`${translations.shopAlt[lang]} 3`}
          ></img>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
