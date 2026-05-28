import "./List.css";
import { cartTranslations } from "../cartTranslations";

const List = ({
  cartItems,
  onRemove,
  onChangeQty,
  onNext,
  onBack,
  readOnly,
  formData,
  shipping,
  payment,
  lang = "cs",
}) => {
  const t = cartTranslations.list;
  const shared = cartTranslations.shared;
  const opts = cartTranslations.shippingPayment.options;

  if (!cartItems || cartItems.length === 0) {
    return <p className="empty">{t.empty[lang]}</p>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const localeFormat = lang === "cs" ? "cs-CZ" : "en-US";

  return (
    <div className="cart">
      <p className="cart-title">
        {readOnly ? t.summaryTitle[lang] : t.cartTitle[lang]}
      </p>

      {cartItems.map((item) => (
        <div key={`${item.id}-${item.size}`} className="cart-item">
          <img src={item.images[0]} alt={item.name} className="cart-item-img" />
          <div className="cart-item-info">
            <p className="cart-item-brand">{item.brand}</p>
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-size">
              {t.size[lang]}: EU {item.size}
            </p>
            <p className="cart-item-price">
              {(item.price * item.qty).toLocaleString(localeFormat)}{" "}
              {shared.currency[lang]}
            </p>
          </div>
          {!readOnly && (
            <div className="cart-item-actions">
              <button onClick={() => onRemove(item.id, item.size)}>✕</button>
              <div className="qty">
                <button onClick={() => onChangeQty(item.id, item.size, -1)}>
                  −
                </button>
                <span>{item.qty}</span>
                <button onClick={() => onChangeQty(item.id, item.size, +1)}>
                  +
                </button>
              </div>
            </div>
          )}
          {readOnly && <p className="cart-item-qty">× {item.qty}</p>}
        </div>
      ))}

      {readOnly && formData && (
        <div className="cart-summary-info">
          <div className="summary-block">
            <p className="summary-block-title">{t.deliveryBlock[lang]}</p>
            <p>
              {formData.firstName} {formData.lastName}
            </p>
            <p>{formData.email}</p>
            <p>+420 {formData.phone}</p>
            <p>
              {formData.street}, {formData.city}, {formData.zip}
            </p>
          </div>
          <div className="summary-block">
            <p className="summary-block-title">{t.shippingBlock[lang]}</p>
            <p>{opts[shipping]?.[lang]}</p>
            <p>{opts[payment]?.[lang]}</p>
          </div>
        </div>
      )}

      <div className="cart-footer">
        <div className="cart-footer-row">
          <span>{t.itemCount[lang]}</span>
          <span>{count}</span>
        </div>
        <div className="cart-footer-row">
          <span>{t.shippingRow[lang]}</span>
          <span>{shared.free[lang]}</span>
        </div>
        <div className="cart-footer-total">
          <span>{t.totalRow[lang]}</span>
          <span>
            {total.toLocaleString(localeFormat)} {shared.currency[lang]}
          </span>
        </div>

        <div className="btn-row">
          {onBack && <button onClick={onBack}>{shared.back[lang]}</button>}
          {!readOnly && (
            <button className="checkout-btn" onClick={onNext}>
              {t.checkoutBtn[lang]}
            </button>
          )}
          {readOnly && (
            <button className="checkout-btn" onClick={onNext}>
              {t.confirmBtn[lang]}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
