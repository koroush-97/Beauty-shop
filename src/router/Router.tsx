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
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "Trackorders",
        element: <TrackOrders />,
      },
      {
        path: "weblog",
        element: <WebLog />,
      },
      {
        path: "callus",
        element: <CallUs />,
      },
    ],
  },
]);
