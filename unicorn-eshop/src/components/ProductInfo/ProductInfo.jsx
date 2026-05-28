import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductInfo.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { productTranslations } from "./productTranslations";

const ProductInfo = ({ product, lang = "cs" }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [msg, setMsg] = useState(null);
  const { addToCart } = useCart();

  const t = productTranslations;
  const localeFormat = lang === "cs" ? "cs-CZ" : "en-US";

  if (!product) return null;

  const hasSizes = product.sizes && product.sizes.length > 0;

  const handleAdd = () => {
    if (hasSizes && !selectedSize) {
      setMsg({ text: t.errorSize[lang], type: "error" });
      setTimeout(() => setMsg(null), 2500);
      return;
    }
    addToCart(product, selectedSize);
    setMsg({ text: t.successAdd[lang], type: "success" });
    setTimeout(() => setMsg(null), 2500);
  };

  return (
    <div className="page">
      <div>
        <button onClick={() => window.location.reload()}>
          {" "}
          <ArrowBackIcon />{" "}
        </button>
      </div>
      <div className="images">
        {product.images.map((img, i) => (
          <img key={i} src={img} alt={product.name} className="img" />
        ))}
      </div>
      <div className="info">
        <h1>{product.brand}</h1>
        <h1>{product.name}</h1> <br />
        <p>
          {product.price.toLocaleString(localeFormat)} {t.currency[lang]}
        </p>
        {hasSizes && (
          <div className="vyber-velikosti">
            <p>{t.selectSizeLabel[lang]}</p>
            <div>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p>
              {t.selectedSizeLabel[lang]} <strong>{selectedSize}</strong>
            </p>
          </div>
        )}
        <div className="pridat-do-kosiku">
          <button onClick={handleAdd}>
            {hasSizes && !selectedSize
              ? t.btnSelectSize[lang]
              : t.btnAddToCart[lang]}
          </button>
          {msg && <p className={`cart-msg ${msg.type}`}>{msg.text}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
