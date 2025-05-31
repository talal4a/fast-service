import { Link } from 'react-router-dom';
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
function Cart() {
  const cart = fakeCart;
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const handleClearCart = () => {};
  return (
    <div>
      <Link
        to="/menu "
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <h2>Your cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.pizzaId}>
            {item.quantity}× {item.name} — ${item.totalPrice}
          </li>
        ))}
      </ul>
      <p>Total: ${totalCartPrice}</p>
      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button onClick={handleClearCart}>Clear cart</button>
      </div>
    </div>
  );
}
export default Cart;
