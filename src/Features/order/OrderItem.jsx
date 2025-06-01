import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="flex flex-col gap-1 border-b border-stone-200 py-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-stone-700">
          <span className="font-medium">{quantity}&times;</span> {name}
        </p>
        {!isLoadingIngredients && ingredients?.length > 0 && (
          <p className="text-xs text-stone-500 italic">
            {ingredients.join(', ')}
          </p>
        )}
        {isLoadingIngredients && (
          <p className="text-xs text-stone-400 italic">
            Loading ingredients...
          </p>
        )}
      </div>
      <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
    </li>
  );
}
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default OrderItem;
