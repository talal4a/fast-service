import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
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
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <p className="mt-4 text-lg font-medium">Total: ${totalCartPrice}</p>
      <div className="mt-6 flex items-center gap-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}
export default Cart;
