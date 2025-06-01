import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItems from './DeleteItems';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentCartQuantityById } from './cartSlice';
// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentCartQuantityById(pizzaId));
  return (
    <li className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="mb-1 text-sm sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItems pizzaId={pizzaId} />
      </div>
    </li>
  );
}
export default CartItem;
