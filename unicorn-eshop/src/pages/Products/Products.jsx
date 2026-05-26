import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductPage from "../../components/ProductPage/ProductPage";
import { getAllProducts } from "../../api/api";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header />
      <NavBar onSearch={setQuery} />
      {selectedProduct ? (
        <ProductInfo product={selectedProduct} />
      ) : loading ? (
        <p>Načítám produkty...</p>
      ) : (
        <ProductPage
          products={filtered}
          onProductClick={setSelectedProduct}
        />
      )}
      <Footer />
    </div>
  );
}