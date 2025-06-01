import { Link } from 'react-router-dom';
function CartOverview() {
  return (
    <div className="flex flex-row items-center justify-center space-x-20 bg-black p-4 text-white sm:px-6 sm:shadow-lg md:flex-row md:justify-between">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
export default CartOverview;
