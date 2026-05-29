import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductPage from "../../components/ProductPage/ProductPage";
import { getAllProducts } from "../../api/api";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Products.css'

const createSlug = (text) => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export default function Products({ lang, setLang }) {
  const { slug, category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState("");

  const loadingText = {
    cs: "Načítám produkty...",
    en: "Loading products...",
  };
  const notFoundText = {
    cs: "Produkt nenalezen",
    en: "Product not found",
  };

  React.useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);
  const selectedProduct = products.find(p => createSlug(p.name) === slug);

  const filtered = products.filter((p) => {
    const search =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase());

    if (category === "men") {
      return search && p.category === "men's clothing";
    }
    if (category === "women") {
      return search && p.category === "women's clothing";
    }
    if (category === "accessories") {
      return search && p.category === "jewelery";
    }
    return search;
  });

  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <NavBar lang={lang} onSearch={setQuery} />

      {slug ? (
        loading ? (
          <p className="loading-error">{loadingText[lang]}</p>
        ) : selectedProduct ? (
          <ProductInfo 
            lang={lang} 
            product={selectedProduct} 
            onBack={() => navigate(-1)}
          />
        ) : (
        !loading && <p className="loading-error">{notFoundText[lang]}</p>
        )
      ) : (
        <ProductPage
          lang={lang}
          products={filtered}
        />
      )}

      <Footer lang={lang} />
    </div>
  );
}
