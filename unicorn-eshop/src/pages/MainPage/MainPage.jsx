import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/MainPage/Slider/Slider";
import Header from "../../components/Header/Header";

export default function MainPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Slider />
      <Footer />
    </div>
  );
}
