import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
  };

  return (
    <div className="page">
      <div className="images">
        {product.images.map((img, i) => (
          <img key={i} src={img} alt={product.name} className="img" />
        ))}
      </div>
      <div className="info">
        <h1>{product.brand}</h1>
        <h1>{product.name}</h1> <br />
        <p>{product.price.toLocaleString()} Kč</p>
        <div className="vyber-velikosti">
          <p>Vyberte velikost (EU):</p>
          <div>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p>Vybraná velikost: <strong>{selectedSize}</strong></p>
        </div>
        <div className="pridat-do-kosiku">
          <button disabled={!selectedSize} onClick={handleAdd}>
            {selectedSize ? "Přidat do košíku" : "Vyberte velikost"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;