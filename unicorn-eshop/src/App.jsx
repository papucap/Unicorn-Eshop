import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import MainPage from './pages/MainPage/MainPage';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/Contact/Contactpage';
import Cart from './pages/Cart/Cart'
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path = "/about" element = {<AboutUs />} />
      <Route path = "/contact" element ={<ContactPage />} />
      <Route path = "/cart" element = {<Cart />} />
    </Routes>
    
  );
}

export default App;
