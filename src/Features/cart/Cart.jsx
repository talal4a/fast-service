import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
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
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
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
        <Button to="/order/new">Order pizzas</Button>
        <button onClick={handleClearCart}>Clear cart</button>
      </div>
    </div>
  );
}
export default Cart;
