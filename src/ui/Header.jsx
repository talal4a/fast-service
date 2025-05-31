import { Link } from 'react-router-dom';
import SearchOrder from '../Features/order/Searchorder';
import UserName from '../Features/user/UserName';
export default function Header() {
  return (
    <header className="boredr-b boredr-stone-200 my-0 flex justify-between bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="mt-1 tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
