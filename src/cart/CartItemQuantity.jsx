export default function CartItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.qunatity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
