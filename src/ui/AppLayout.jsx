import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import CartOverview from '../Features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
export default function AppLayout() {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-auto">
        <main
          className={
            location.pathname.startsWith('/menu') ||
            location.pathname.startsWith('/cart') ||
            location.pathname.startsWith('/order')
              ? ''
              : 'mx-auto max-w-3xl'
          }
        >
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
