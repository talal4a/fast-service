import LinkButton from '../../ui/LinkButton';
function EmptyCart() {
  return (
    <div className="px-4 py-8">
      <LinkButton to="/menu" className="text-yellow-500 hover:underline">
        &larr; Back to menu
      </LinkButton>

      <p className="mt-5 text-lg font-bold text-stone-600 md:text-xl">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}
export default EmptyCart;
