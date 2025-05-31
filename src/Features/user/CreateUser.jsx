import { useState } from 'react';
import Button from '../../ui/Button';
function CreateUser() {
  const [username, setUsername] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="-mt-20 mr-10 sm:mt-0" onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-full rounded-md border border-stone-300 bg-white px-4 py-2 text-sm text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-yellow-500 focus:ring-yellow-500 focus:outline-none sm:text-base md:w-[400px] lg:w-[500px] xl:w-[600px]"
      />
      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}
export default CreateUser;
