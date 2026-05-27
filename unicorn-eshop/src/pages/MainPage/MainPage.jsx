import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/MainPage/Slider/Slider";
import Header from "../../components/Header/Header";
import ProductBox from "../../components/MainPage/ProductBox";
import News from "../../components/MainPage/News/News";

import { getAllProducts } from "../../api/api";

export default function MainPage() {
  const [products, setProducts] = useState([]);

  // Načtení dat z FakeStore API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Nepodařilo se načíst produkty:", error);
      }
    }

    fetchProducts();
  }, []);

  // Rozdělení produktů
  const newestProducts = products.slice(0, 5);
  const trendyProducts = products.slice(5, 10);

  return (
    <div>
      <Header />
      <NavBar />
      <Slider />

      <ProductBox title="NEJNOVĚJŠÍ PRODUKTY" products={newestProducts} />

      <News />

      <ProductBox title="TRENDY" products={trendyProducts} />

      <Footer />
    </div>
  );
}
