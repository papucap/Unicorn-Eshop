import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import MainPage from './pages/MainPage/MainPage';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/Contact/Contactpage';
import Cart from './pages/Cart/Cart'
import ProfilePage from './pages/Profile/ProfilePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Registrace/RegistracePage';
import "./App.css"
import QRPage from './pages/Cart/QR/QRPage';




function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path = "/about" element = {<AboutUs />} />
      <Route path = "/contact" element ={<ContactPage />} />
      <Route path = "/cart" element = {<Cart />} />
      <Route path = "/profile" element = {<ProfilePage/>} />
      <Route path = "/login" element = {<LoginPage/>} />
      <Route path = "/register" element = {<RegisterPage/>} />
      <Route path = "/cart/QR" element = {<QRPage/>} />
    </Routes>
    
  );
}

export default App;
