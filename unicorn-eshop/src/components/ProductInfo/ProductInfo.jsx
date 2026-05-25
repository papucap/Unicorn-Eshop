import { useState } from 'react';

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const product = {
    brand: "Značka",
    name: "Název",
    price: "2 999 Kč",
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: ["https://images.placeholder.com/600x600", "https://images.placeholder.com/600x600"]
  };

  return (
    <div className="page">
      
      <div className="images">
        {product.images.map((img, i) => (
          <img key={i} src={img} alt="product" className="img" />
        ))}
      </div>

      <div className="info">
        <h1>{product.brand}</h1>
        <h1>{product.name}</h1> <br />
        <p>{product.price}</p>

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
          <p>Vybraná velikost: {selectedSize}</p>
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