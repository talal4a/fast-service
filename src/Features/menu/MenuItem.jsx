import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex items-start gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 flex-shrink-0 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-5 flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm text-stone-500 uppercase">Sold out</p>
          )}
          {!soldOut && <Button type="small">ADD TO CART</Button>}
        </div>
      </div>
    </li>
  );
}
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenuItem;
