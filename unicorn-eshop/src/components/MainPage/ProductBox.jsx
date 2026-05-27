import "./ProductBox.css";

const ProductTitle = "Boty";
const PRODUCTS_DATA = [
  {
    id: 1,
    brand: "NIKE",
    name: "AirMax 3",
    price: 3555,
    images: [
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    ],
  },
  {
    id: 2,
    brand: "NIKE",
    name: "AirMax 3",
    price: 3555,
    images: [
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    ],
  },
  {
    id: 3,
    brand: "NIKE",
    name: "AirMax 3",
    price: 3555,
    images: [
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    ],
  },
  {
    id: 4,
    brand: "NIKE",
    name: "AirMax 3",
    price: 3555,
    images: [
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    ],
  },
  {
    id: 5,
    brand: "NIKE",
    name: "AirMax 3",
    price: 3555,
    images: [
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    ],
  },
];

function ProductBox() {
  return (
    <>
      <div className="productSection">
        <div className="productSection-top">
          <h1>{ProductTitle}</h1>

          <button
            className="show-all-btn"
            onClick={() => (window.location.href = "/products")}
          >
            Zobrazit vše
          </button>
        </div>

        <div className="productContainer">
          {PRODUCTS_DATA.map((product) => (
            <div className="product" key={product.id}>
              <div className="images">
                {product.images.map((img, i) => (
                  <img key={i} src={img} alt={product.name} className="img" />
                ))}
              </div>

              <div className="info">
                <h1 className="brand">{product.brand}</h1>
                <h1 className="name">{product.name}</h1> <br />
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
