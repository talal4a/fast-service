import { Link, useNavigate } from 'react-router-dom';
//eslint-disable-next-line
export default function LinkButton({ children, to }) {
  const naviagte = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  if (to === '-1')
    <button className={className} onClick={() => naviagte(-1)}>
      {children}
    </button>;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
