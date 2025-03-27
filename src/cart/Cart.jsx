import CartItem from "./CartItem";

import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.lenth === 0 ? (
        <p>Your Card is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
