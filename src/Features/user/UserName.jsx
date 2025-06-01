import { useSelector } from 'react-redux';

export default function UserName() {
  const name = useSelector((state) => state.user.userName);
  if (!name) return null;
  return <div className="hidden text-sm font-semibold md:block">{name}</div>;
}
