import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { getAllProducts } from './api/api';
import Products from './pages/Products/Products';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';

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
      <NavBar onSearch={setQuery} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products products={filtered} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;