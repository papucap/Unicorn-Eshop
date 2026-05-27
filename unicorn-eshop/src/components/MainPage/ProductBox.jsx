import "./ProductBox.css";

function ProductBox({ title, products = [], lang = "cs" }) {
  // Výchozí nadpis, pokud žádný nepřijde v props
  const defaultTitles = {
    cs: "Produkty",
    en: "Products",
  };

  const buttons = {
    cs: "Zobrazit vše",
    en: "Show all",
  };

  const currencies = {
    cs: "Kč",
    en: "CZK",
  };

  const displayTitle = title || defaultTitles[lang];

  return (
    <>
      <div className="productSection">
        <div className="productSection-top">
          <h1>{displayTitle}</h1>

          <button
            className="show-all-btn"
            onClick={() => (window.location.href = "/products")}
          >
            {buttons[lang]}
          </button>
        </div>

        <div className="productContainer">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="images-product">
                {product.images.map((img, i) => (
                  <img key={i} src={img} alt={product.name} className="img" />
                ))}
              </div>

              <div className="info-product">
                <h1 className="brand-product">{product.brand}</h1>
                <h1 className="name-product">{product.name}</h1> <br />
                <p>
                  {product.price.toLocaleString()} {currencies[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductBox;
