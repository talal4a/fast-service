import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { name, quantity, totalPrice } = item;
  return (
    <li className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="mb-1 text-sm sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">DELETE</Button>
      </div>
    </li>
  );
}
export default CartItem;
