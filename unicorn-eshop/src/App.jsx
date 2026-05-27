import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import MainPage from './pages/MainPage/MainPage';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<Products />} />
      <Route path = "/about" element = {<AboutUs />} />
      <Route path = "/contact" element ={<ContactPage />} />
    </Routes>
    
  );
}

export default App;
