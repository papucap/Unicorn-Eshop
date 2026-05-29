import "./ProductPage.css";
import { Link } from "react-router-dom";

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

const ProductPage = ({ products, lang = "cs" }) => {
  const translations = {
    productCount: {
      cs: "produktů",
      en: "products",
    },
    currency: {
      cs: "Kč",
      en: "CZK",
    },
  };

  return (
    <div className="product-page">
      <div className="products">
        <span>
          {products.length} {translations.productCount[lang]}
        </span>

        <div className="products-rozlozeni">
          {products.map((product) => (
            <Link 
              to={`/product/${createSlug(product.name)}`} 
              key={product.id} 
              className="product-card"
            >
              <div className="card-image">
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div className="card-info">
                <span className="card-brand">{product.brand}</span>
                <h2 className="card-name" title={product.name}>
                  {product.name.length > 40
                    ? product.name.substring(0, 40) + "..."
                    : product.name}
                </h2>

                <p className="card-price">
                  {product.price.toLocaleString()} {translations.currency[lang]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
