import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant.js';
import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice.js';
import EmptyCart from './EmptyCart.jsx';
import store from '../../store.js';
import { formatCurrency } from '../../utils/helpers.js';
import { fetchAddress } from '../user/userSlice.js';
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  // const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const [withPriority, setWithPriority] = useState(false);
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const finalTotal = totalPrice + priorityPrice;
  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <div className="mx-auto mt-10 max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Ready to order? Lets go!
      </h2>
      <button
        onClick={() => {
          dispatch(fetchAddress());
        }}
      >
        Get Position
      </button>
      <Form method="POST" className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            required
            defaultValue={userName}
            // onChange={(e) => setCustomer(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone number
          </label>

          <input
            type="tel"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          {formErrors?.phone && (
            <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
          />
          <label
            htmlFor="priority"
            className="text-sm font-medium text-gray-700"
          >
            Want to give your order priority? (+$10)
          </label>
        </div>
        <p className="text-lg font-semibold text-gray-800">
          Total to pay: <span className="text-yellow-600">${finalTotal}</span>
        </p>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <Button type="primary" disabled={isSubmitting}>
          {isSubmitting
            ? 'Placing order...'
            : `'Order now form ${formatCurrency(finalTotal)}'`}
        </Button>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
