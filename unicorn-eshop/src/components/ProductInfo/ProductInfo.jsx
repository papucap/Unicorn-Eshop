import { useState } from 'react';

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const product = {
    brand: "Nike",
    name: "Air Force 1 '07",
    price: "2 999 Kč",
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: ["https://images.placeholder.com/600x600", "https://images.placeholder.com/600x601"]
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
                className={`py-3 border text-sm transition-all ${
                  selectedSize === size 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white border-gray-200 hover:border-black'
                }`}
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
                className={` ${
                    selectedSize 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
            >
                {selectedSize ? 'Přidat do košíku' : 'Vyberte velikost'}
            </button>
        </div>
        
        <p>Doručení zdarma na prodejnu</p>
      </div>
    </div>
  );
};

export default ProductInfo;