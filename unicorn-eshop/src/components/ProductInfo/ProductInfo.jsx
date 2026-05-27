import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductInfo.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [msg, setMsg] = useState(null);
  const { addToCart } = useCart();

  if (!product) return null;

  const hasSizes = product.sizes && product.sizes.length > 0;

  const handleAdd = () => {
    if (hasSizes && !selectedSize) {
      setMsg({ text: "Nejprve vyberte velikost", type: "error" });
      setTimeout(() => setMsg(null), 2500);
      return;
    }
    addToCart(product, selectedSize);
    setMsg({ text: "Produkt byl přidán do košíku", type: "success" });
    setTimeout(() => setMsg(null), 2500);
  };

  return (
    <div className="page">
      <div>
        <button onClick={() => window.location.reload()}> <ArrowBackIcon /> </button>
      </div>
      <div className="images">
        {product.images.map((img, i) => (
          <img key={i} src={img} alt={product.name} className="img" />
        ))}
      </div>
      <div className="info">
        <h1>{product.brand}</h1>
        <h1>{product.name}</h1> <br />
        <p>{product.price.toLocaleString()} Kč</p>
        {hasSizes && (
          <div className="vyber-velikosti">
            <p>Vyberte velikost (EU):</p>
            <div>
              {product.sizes.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
            <p>
              Vybraná velikost: <strong>{selectedSize}</strong>
            </p>
          </div>
        )}
        <div className="pridat-do-kosiku">
          <button onClick={handleAdd}>
            {hasSizes && !selectedSize
              ? "Vyberte velikost"
              : "Přidat do košíku"}
          </button>
          {msg && <p className={`cart-msg ${msg.type}`}>{msg.text}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
