import './ProductPage.css'

const ProductPage = ({products, onProductClick}) => {

  return (
    <div className='product-page'>
        <div className='products'>
            <span>{products.length} produktů</span>
            <div className='products-rozlozeni'>
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="product-card" 
                        onClick={() => onProductClick(product)}
                    >
                        <div className="card-image">
                            <img  src={product.images[0]} alt={product.name} />
                        </div>
                        <div className="card-info">
                            <span className="card-brand">{product.brand}</span>
                            <h2 className="card-name" title={product.name}>
                                    {product.name.length > 40 ? product.name.substring(0, 40) + "..." : product.name}
                                </h2>
                            <p className="card-price">{product.price.toLocaleString()} Kč</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductPage
