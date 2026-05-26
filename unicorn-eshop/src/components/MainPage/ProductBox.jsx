function ProductBox() {
  return (
    <>
      <div className="productSection">
        <h1>NEJNOVĚJŠÍ PRODUKTY</h1>

        <div className="productContainer">
          <div className="product">
            <div className="images">
              <img
                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
                alt="produkt"
              ></img>
            </div>
            <div className="info">
              <h1>NIKE</h1>
              <h1>AirMax 3</h1> <br />
              <p>3555 Kč</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBox;

//{product.images.map((img, i) => (<img key={i} src={img} alt={product.name} className="img" />))}
//
