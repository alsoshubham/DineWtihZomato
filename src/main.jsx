import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Error from './Components/Error.jsx';
import AddRestaurant from './Components/AddRestaurant.jsx';
import Collection from './Components/Collection.jsx';
import Login from './Components/Login.jsx';
import Restaurant from './Components/Restaurant.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/PartnerWithUs',
        element: <AddRestaurant/>,
      },
      {
        path: '/AddRestaurant',
        element: <AddRestaurant/>,
      },
      {
        path: '/Collection',
        element: <Collection/>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Restaurant',
    element: <Restaurant />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)
