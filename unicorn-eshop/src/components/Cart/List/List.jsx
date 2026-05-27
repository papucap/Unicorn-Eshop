import "./List.css";

const SHIPPING_LABELS = {
  zasılkovna: "Zásilkovna – výdejní místo",
  kuryr: "Kurýr na adresu",
};

const PAYMENT_LABELS = {
  card: "Platební karta",
  transfer: "Bankovní převod",
  cod: "Dobírka",
};

const List = ({ cartItems, onRemove, onChangeQty, onNext, onBack, readOnly, formData, shipping, payment }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="empty">Košík je prázdný</p>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart">
      <p className="cart-title">{readOnly ? "Souhrn objednávky" : "Košík"}</p>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.name} className="cart-item-img" />
          <div className="cart-item-info">
            <p className="cart-item-brand">{item.brand}</p>
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-size">Velikost: EU {item.size}</p>
            <p className="cart-item-price">
              {(item.price * item.qty).toLocaleString("cs-CZ")} Kč
            </p>
          </div>
          {!readOnly && (
            <div className="cart-item-actions">
              <button onClick={() => onRemove(item.id, item.size)}>✕</button>
              <div className="qty">
                <button onClick={() => onChangeQty(item.id, item.size, -1)}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => onChangeQty(item.id, item.size, +1)}>+</button>
              </div>
            </div>
          )}
          {readOnly && (
            <p className="cart-item-qty">× {item.qty}</p>
          )}
        </div>
      ))}

      {readOnly && formData && (
        <div className="cart-summary-info">
          <div className="summary-block">
            <p className="summary-block-title">Dodací údaje</p>
            <p>{formData.firstName} {formData.lastName}</p>
            <p>{formData.email}</p>
            <p>+420 {formData.phone}</p>
            <p>{formData.street}, {formData.city}, {formData.zip}</p>
          </div>
          <div className="summary-block">
            <p className="summary-block-title">Doprava a platba</p>
            <p>{SHIPPING_LABELS[shipping]}</p>
            <p>{PAYMENT_LABELS[payment]}</p>
          </div>
        </div>
      )}

      <div className="cart-footer">
        <div className="cart-footer-row">
          <span>Počet položek</span>
          <span>{count}</span>
        </div>
        <div className="cart-footer-row">
          <span>Doprava</span>
          <span>zdarma</span>
        </div>
        <div className="cart-footer-total">
          <span>Celkem</span>
          <span>{total.toLocaleString("cs-CZ")} Kč</span>
        </div>

        <div className="btn-row">
          {onBack && (
            <button onClick={onBack}>‹ Zpět</button>
          )}
          {!readOnly && (
            <button className="checkout-btn" onClick={onNext}>
              Přejít k pokladně
            </button>
          )}
          {readOnly && (
            <button className="checkout-btn" onClick={onNext}>
              Potvrdit objednávku
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;