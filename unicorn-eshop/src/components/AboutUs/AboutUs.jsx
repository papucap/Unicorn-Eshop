import "./AboutUs.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function AboutUs() {
  return (
    <>
      <div className="logo-section">
        <img src="./src/assets/logo.png" alt="VELOOT" className="logo-img" />
      </div>

      <div className="socialsContainer">
        <h1 id="socialTitle">TISÍCE SPOKOJENÝCH ZÁKAZNÍKŮ</h1>
        <h3 id="socialsText">PŘESVĚDČTE SE SAMI NA NAŠICH SOCIÁLNÍCH SÍTÍCH</h3>
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
        <h1 id="shopTitle">KAMENNÁ POBOČKA V PRAZE</h1>
        <p id="shopText">NA PŘÍKOPĚ, 110 00</p>
        <div className="shopPhotos">
          <img src="./src/assets/ShopPhotos/shop1.png" alt="shopPhoto1"></img>
          <img src="./src/assets/ShopPhotos/shop2.png" alt="shopPhoto2"></img>
          <img src="./src/assets/ShopPhotos/shop3.png" alt="shopPhoto3"></img>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
