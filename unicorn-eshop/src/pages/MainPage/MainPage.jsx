import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/MainPage/Slider/Slider";
import Header from "../../components/Header/Header";
import ProductBox from "../../components/MainPage/ProductBox";
import News from "../../components/MainPage/News/News";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { getAllProducts } from "../../api/api";

export default function MainPage({ lang, setLang }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const newestProducts = products.slice(0, 5);
  const trendyProducts = products.slice(5, 10);


  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <NavBar lang={lang} />
      {selectedProduct ? (
        <ProductInfo
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <>
          <Slider lang={lang} />
          <ProductBox
            lang={lang}
            title="NEJNOVĚJŠÍ PRODUKTY"
            products={newestProducts}
            onProductClick={(product) => setSelectedProduct(product)}
          />
          <News lang={lang} />
          <ProductBox
            lang={lang}
            title="TRENDY"
            products={trendyProducts}
            onProductClick={(product) => setSelectedProduct(product)}
          />
        </>
      )}
      <Footer lang={lang} />
    </div>
  );
}