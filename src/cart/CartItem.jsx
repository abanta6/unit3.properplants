import CartitemQuantity from "./CartItemQuantity";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <CartitemQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
