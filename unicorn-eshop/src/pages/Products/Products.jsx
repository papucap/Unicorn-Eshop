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

  React.useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
        <Header />
      <NavBar />
      {selectedProduct ? (
        <ProductInfo product={selectedProduct} />
      ) : loading ? (
        <p>Načítám produkty...</p>
      ) : (
        <ProductPage
          products={products}
          onProductClick={setSelectedProduct}
        />
      )}
        <Footer />
    </div>
  );
}