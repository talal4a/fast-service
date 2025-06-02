import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Error from './ui/Error.jsx';
import Menu, { loader as menuLoader } from './Features/menu/Menu.jsx';
import Cart from './Features/cart/Cart.jsx';
import CreateOrder, {
  action as createOrderAction,
} from './Features/cart/CreateOrder.jsx';
import Order from './Features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';
import { loader as orderLoader } from './Features/order/Order.jsx';
import { action as updateOrderAction } from './Features/order/UpdateOrder.jsx';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        loader: orderLoader,
        element: <Order />,
        action: updateOrderAction,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
