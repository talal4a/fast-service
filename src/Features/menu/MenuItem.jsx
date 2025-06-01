import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice.js';
import DeleteItems from '../cart/DeleteItems.jsx';
import { getCurrentCartQuantityById } from '../cart/cartSlice.js';
import UpdateItemQuantity from '../cart/UpdateItemQuantity.jsx';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentCartQuantityById(id));
  const inCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: pizza.id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }
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
          {inCart ? (
            <div className='flex items-center gap-3 sm:gap-8'>
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItems pizzaId={id} />
            </div>
          ) : (
            ''
          )}
          {!soldOut && !inCart && (
            <Button type="small" onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          )}
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
