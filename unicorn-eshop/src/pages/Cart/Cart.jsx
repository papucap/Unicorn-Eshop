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
import QR from "../../components/Cart/QR/QR";

export default function CartPage() {
  const { cartItems, removeFromCart, changeQty } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "Česká republika",
    billing: false,
    marketing: false,
  });

  const [shipping, setShipping] = useState("zasılkovna");
  const [payment, setPayment] = useState("card");

  return (
    <>
      <Header />
      <NavBar />
      <Steps currentStep={currentStep} onStepChange={setCurrentStep} />

      {currentStep === 1 && (
        <List
          cartItems={cartItems}
          onRemove={(id, size) => removeFromCart(id, size)}
          onChangeQty={(id, size, delta) => changeQty(id, size, delta)}
          onNext={() => setCurrentStep(2)}
        />
      )}
      {currentStep === 2 && (
        <Form
          formData={formData}
          setFormData={setFormData}
          onBack={() => setCurrentStep(1)}
          onNext={() => setCurrentStep(3)}
        />
      )}
      {currentStep === 3 && (
        <ShippingPayment
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
          cartItems={cartItems}
          readOnly
          formData={formData}
          shipping={shipping}
          payment={payment}
          onBack={() => setCurrentStep(3)}
          onNext={() => setCurrentStep(5)}
        />
      )}
      {currentStep === 5 && (
        <QR 
        onBack={() => setCurrentStep(3)} 
        />
        )}

      <Footer />
    </>
  );
}
