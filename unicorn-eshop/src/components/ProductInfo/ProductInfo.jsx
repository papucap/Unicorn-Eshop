import { useState } from 'react';
import './ProductInfo.css'

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null;

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

        <div className='pridat-do-kosiku'>
            <button 
                disabled={!selectedSize}
            >
                {selectedSize ? 'Přidat do košíku' : 'Vyberte velikost'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;


/*při zavolání se musí vložit informace o produktu
<ProductInfo product={{brand: "Nike",
    name: "Air Force 1 '07",
    price: "2 999 ",
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: ["https://images.com/600x600", "https://images.com/600x600"]}}></ProductInfo>
    */