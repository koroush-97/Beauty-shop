import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/About";
import TrackOrders from "../pages/trackorders/TrackOrders";
import WebLog from "../pages/weblog/WebLog";
import CallUs from "../pages/callus/CallUs";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    handle: { title: "خانه" },
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: { title: "خانه" },
      },
      {
        path: "about",
        element: <AboutPage />,
        handle: { title: "درباره ما" },
      },
      {
        path: "track-orders",
        element: <TrackOrders />,
        handle: { title: "پیگیری سفارشات" },
      },
      {
        path: "weblog",
        element: <WebLog />,
        handle: { title: "وبلاگ" },
      },
      {
        path: "call-us",
        element: <CallUs />,
        handle: { title: "تماس با ما" },
      },
    ],
  },
]);
