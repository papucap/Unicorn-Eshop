import "./ProductBox.css";

// Přidali jsme 'products = []' jako prop
function ProductBox({ title = "Produkty", products = [] }) {
  return (
    <>
      <div className="productSection">
        <div className="productSection-top">
          <h1>{title}</h1>

          <button
            className="show-all-btn"
            onClick={() => (window.location.href = "/products")}
          >
            Zobrazit vše
          </button>
        </div>

        <div className="productContainer">
          {/* Teď mapujeme produkty, které přišly přes props */}
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
                <p>{product.price.toLocaleString()} Kč</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductBox;
