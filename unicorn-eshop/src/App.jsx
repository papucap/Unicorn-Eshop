import { useState } from "react"; // Přidán import pro useState
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactPage from "./pages/Contact/Contactpage";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import QRPage from "./pages/Cart/QR/QRPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import LoginPage from "./pages/Login/LoginPage";
import RegistracePage from "./pages/Registrace/RegistracePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // Hlavní stav pro jazyk celého eshopu
  const [lang, setLang] = useState("cs");

  const notFoundMsg = {
    cs: "Stránka nenalezena (404)",
    en: "Page not found (404)"
  };

  return (
    <Routes>
      <Route path="/" element={<MainPage lang={lang} setLang={setLang} />} />
      <Route
        path="/products"
        element={<Products lang={lang} setLang={setLang} />}
      />
      <Route
        path="/products/:category"
        element={<Products lang={lang} setLang={setLang} />}
      />
      <Route 
        path="/product/:slug" 
        element={<Products lang={lang} setLang={setLang} />} 
      />
      <Route
        path="/about"
        element={<AboutUs lang={lang} setLang={setLang} />}
      />
      <Route
        path="/contact"
        element={<ContactPage lang={lang} setLang={setLang} />}
      />
      <Route path="/cart" element={<Cart lang={lang} setLang={setLang} />} />
      <Route
        path="/cart/QR"
        element={<QRPage lang={lang} setLang={setLang} />}
      />
      <Route
        path="/login"
        element={<LoginPage lang={lang} setLang={setLang} />}
      />
      <Route
        path="/profile"
        element={<ProfilePage lang={lang} setLang={setLang} />}
      />
      <Route
        path="/register"
        element={<RegistracePage lang={lang} setLang={setLang} />}
      />


      <Route 
        path="*" 
        element={
          <div>
            <Header />
            <NavBar />
            <div style={{ textAlign: "center", padding: "50px"}}>
              <h1>{notFoundMsg[lang]}</h1>
              <a href="/">Zpět na hlavní stránku / Back to home</a>
            </div>
            <Footer />
          </div>
        } 
      />
    </Routes>
  );
}

export default App;
