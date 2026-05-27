import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/MainPage/Slider/Slider";
import Header from "../../components/Header/Header";
import News from "../../components/MainPage/News/News";
import ProductBox from "../../components/MainPage/ProductBox";

export default function MainPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Slider />
      <ProductBox title = "NEJNOVĚJŠÍ PRODUKTY" />
      
      <News />
      <ProductBox title = "TRENDY"/>
      <Footer />
    </div>
  );
}
