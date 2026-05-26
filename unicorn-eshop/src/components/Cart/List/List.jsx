import { useState } from 'react';
import './List.css';

const List = ({ cartItems, onRemove, onChangeQty }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="empty">Košík je prázdný</p>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart">
      <p className="cart-title">Košík</p>

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.name} className="cart-item-img" />
          <div className="cart-item-info">
            <p className="cart-item-brand">{item.brand}</p>
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-size">Velikost: EU {item.size}</p>
            <p className="cart-item-price">
              {(item.price * item.qty).toLocaleString('cs-CZ')} Kč
            </p>
          </div>
          <div className="cart-item-actions">
            <button className="remove" onClick={() => onRemove(item.id)}>✕</button>
            <div className="qty">
              <button onClick={() => onChangeQty(item.id, -1)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => onChangeQty(item.id, +1)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <div className="cart-footer-row">
          <span>Počet položek</span><span>{count}</span>
        </div>
        <div className="cart-footer-row">
          <span>Doprava</span><span>zdarma</span>
        </div>
        <div className="cart-footer-total">
          <span>Celkem</span>
          <span>{total.toLocaleString('cs-CZ')} Kč</span>
        </div>
        <button className="checkout-btn">Přejít k pokladně</button>
      </div>
    </div>
  );
};

export default List;