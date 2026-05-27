import "./ShippingPayment.css";

const SHIPPING_OPTIONS = [
  { id: "zasılkovna", label: "Zásilkovna – výdejní místo", price: 0 },
  { id: "kuryr",      label: "Kurýr na adresu",            price: 99 },
];

const PAYMENT_OPTIONS = [
  { id: "card",     label: "Platební karta" },
  { id: "transfer", label: "Bankovní převod" },
  { id: "cod",      label: "Dobírka" },
];

export default function ShippingPayment({ shipping, setShipping, payment, setPayment, onBack, onNext }) {
  return (
    <div className="shipping-wrap">
      <div className="shipping-section">
        <h2>Doprava</h2>
        {SHIPPING_OPTIONS.map(opt => (
          <label key={opt.id} className={`shipping-option ${shipping === opt.id ? "selected" : ""}`}>
            <input type="radio" name="shipping" value={opt.id} checked={shipping === opt.id} onChange={() => setShipping(opt.id)} />
            <span>{opt.label}</span>
            <span className="option-price">{opt.price === 0 ? "zdarma" : `${opt.price} Kč`}</span>
          </label>
        ))}
      </div>

      <div className="shipping-section">
        <h2>Platba</h2>
        {PAYMENT_OPTIONS.map(opt => (
          <label key={opt.id} className={`shipping-option ${payment === opt.id ? "selected" : ""}`}>
            <input type="radio" name="payment" value={opt.id} checked={payment === opt.id} onChange={() => setPayment(opt.id)} />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      <div className="btn-row">
        <button onClick={onBack}>‹ Zpět</button>
        <button onClick={onNext}>Dále ›</button>
      </div>
    </div>
  );
}