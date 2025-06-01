import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Button({ children, disabled, to, type }) {
  const base =
    'rounded-md  bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed';
  const style = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-4 md:px-5 md:py-2.5 text-xs',
    secondary:
      'rounded-md  border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-4 py-2.5 hover:text-stone-800',
  };
  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};
