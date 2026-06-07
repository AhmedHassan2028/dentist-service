import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Booking from './booking.tsx';
import Confirmation from './confirmation.tsx';

//video help: https://www.youtube.com/watch?v=c02YoWR9gSY
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/booking",
    element: <Booking />,
  }, {
    path: "/confirmation",
    element: <Confirmation />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
