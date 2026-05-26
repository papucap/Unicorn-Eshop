import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { getAllProducts } from './api/api';
import Products from './pages/Products/Products';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Products />
    </div>
  );
}

export default App;