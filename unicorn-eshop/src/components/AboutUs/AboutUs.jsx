import "./AboutUs.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function AboutUs() {
  return (
    <>
      <div className="logo">
        <img src="./src/assets/logo.png" alt="VELOOT"></img>
      </div>

      <div className="socilasContainer">
        <h1 id="socialTitle">TISÍCE SPOKOJENÝCH ZÁKAZNÍKŮ</h1>
        <h3 id="socialsText">PŘESVĚDČTE SE SAMY NA NAŠICH SOCIÁLNÍCH SÍTÍ</h3>
        <div className="socialsIcons">
          <ul className="socilasLinks">
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
      </div>

      <div className="shopPhotosContainer">
        <h1 id="shopTitle">KAMENNÁ POBOČKA V PRAZE</h1>
        <p id="shopText">NA PŘÍKOPE, 110 000</p>
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
