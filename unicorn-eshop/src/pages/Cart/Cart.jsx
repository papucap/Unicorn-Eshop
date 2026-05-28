import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Steps from "../../components/Cart/Steps/Steps";
import ContactCart from "../../components/Cart/ContactCart/ContactCart";
import Form from "../../components/Cart/Form/Form";
import List from "../../components/Cart/List/List";
import ShippingPayment from "../../components/Cart/ShippingPayment/ShippingPayment";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function CartPage({ lang = "cs", setLang }) {
  const { cartItems, removeFromCart, changeQty } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: lang === "cs" ? "Česká republika" : "Czech Republic",
    billing: false,
    marketing: false,
  });

  const [shipping, setShipping] = useState("zasılkovna");
  const [payment, setPayment] = useState("card");

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <NavBar lang={lang} />
      <Steps
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        lang={lang}
      />

      <div className="cart-layout">
        <div className="cart-main">
          {currentStep === 1 && (
            <List
              lang={lang}
              cartItems={cartItems}
              onRemove={(id, size) => removeFromCart(id, size)}
              onChangeQty={(id, size, delta) => changeQty(id, size, delta)}
              onNext={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 2 && (
            <Form
              lang={lang}
              formData={formData}
              setFormData={setFormData}
              onBack={() => setCurrentStep(1)}
              onNext={() => setCurrentStep(3)}
            />
          )}
          {currentStep === 3 && (
            <ShippingPayment
              lang={lang}
              cartItems={cartItems}
              shipping={shipping}
              setShipping={setShipping}
              payment={payment}
              setPayment={setPayment}
              onBack={() => setCurrentStep(2)}
              onNext={() => setCurrentStep(4)}
            />
          )}
          {currentStep === 4 && (
            <List
              lang={lang}
              cartItems={cartItems}
              readOnly
              formData={formData}
              shipping={shipping}
              payment={payment}
              onBack={() => setCurrentStep(3)}
              onNext={() => navigate("/cart/QR")}
            />
          )}
        </div>

        <div className="cart-side">
          <ContactCart lang={lang} />
        </div>
      </div>

      <Footer lang={lang} />
    </>
  );
}
