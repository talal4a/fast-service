import CreateUser from '../Features/user/CreateUser.jsx';
function Home() {
  return (
    <div className="my-20 flex flex-col px-4 text-center sm:my-10">
      <h1 className="mb-32 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}
export default Home;
