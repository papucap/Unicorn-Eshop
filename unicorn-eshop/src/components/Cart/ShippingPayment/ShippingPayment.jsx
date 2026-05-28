import "./ShippingPayment.css";
import { cartTranslations } from "../cartTranslations";

const SHIPPING_OPTIONS = [
  { id: "zasılkovna", price: 0 },
  { id: "kuryr", price: 99 },
];

const PAYMENT_OPTIONS = [{ id: "card" }, { id: "transfer" }, { id: "cod" }];

export default function ShippingPayment({
  shipping,
  setShipping,
  payment,
  setPayment,
  onBack,
  onNext,
  lang = "cs",
}) {
  const t = cartTranslations.shippingPayment;
  const shared = cartTranslations.shared;

  return (
    <div className="shipping-wrap">
      <div className="shipping-section">
        <h2>{t.shippingTitle[lang]}</h2>
        {SHIPPING_OPTIONS.map((opt) => (
          <label
            key={opt.id}
            className={`shipping-option ${shipping === opt.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="shipping"
              value={opt.id}
              checked={shipping === opt.id}
              onChange={() => setShipping(opt.id)}
            />
            <span>{t.options[opt.id][lang]}</span>
            <span className="option-price">
              {opt.price === 0
                ? shared.free[lang]
                : `${opt.price} ${shared.currency[lang]}`}
            </span>
          </label>
        ))}
      </div>

      <div className="shipping-section">
        <h2>{t.paymentTitle[lang]}</h2>
        {PAYMENT_OPTIONS.map((opt) => (
          <label
            key={opt.id}
            className={`shipping-option ${payment === opt.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="payment"
              value={opt.id}
              checked={payment === opt.id}
              onChange={() => setPayment(opt.id)}
            />
            <span>{t.options[opt.id][lang]}</span>
          </label>
        ))}
      </div>

      <div className="btn-row">
        <button onClick={onBack}>{shared.back[lang]}</button>
        <button onClick={onNext}>{shared.next[lang]}</button>
      </div>
    </div>
  );
}
