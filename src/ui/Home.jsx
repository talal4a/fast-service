import { useSelector } from 'react-redux';
import CreateUser from '../Features/user/CreateUser.jsx';
import Button from './Button.jsx';
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-20 flex flex-col px-4 text-center sm:my-10">
      <h1 className="mb-32 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
}
export default Home;
