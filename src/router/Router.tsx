import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/About";
import TrackOrders from "../pages/trackorders/TrackOrders";
import WebLog from "../pages/weblog/WebLog";
import CallUs from "../pages/callus/CallUs";
import Test from "../components/test/Test";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Basket from "../pages/basket/Basket";

// personal and account
import Account from "../components/account/Account";
import UserInfo from "../components/userinfo/UserInfo";
import UserOrders from "../components/userorders/UserOrders";
import UserActivitys from "../components/useractivitys/UserActivitys";
import UserPayments from "../components/userpayments/UserPayments";
import Wallet from "../components/wallet/Wallet";

// orders routes
import CancelledProducts from "../components/cancelledproducts/CancelledProducts";
import ReturtendProducts from "../components/returendproducts/ReturtendProducts";
import SendProducts from "../components/sendproducts/SendProducts";
import ProgressProducts from "../components/progressproducts/ProgressProducts";
import NotFound from "../pages/notfound/NotFound";

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
      {
        path: "test",
        element: <Test />,
        handle: { title: "test" },
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
    handle: { title: "ثبت نام" },
  },
  {
    path: "login",
    element: <Login />,
    handle: { title: "ورود" },
  },
  {
    path: "basket",
    element: <Basket />,
    handle: { title: "سبدخرید" },
  },
  {
    path: "account",
    element: <Account />,
    handle: { title: "اکانت" },
    children: [
      {
        index: true,
        element: <UserInfo />,
        handle: { title: "اطلاعات حساب کاربری" },
      },
      {
        path: "user-orders",
        element: <UserOrders />,
        handle: { title: "لیست سفارشات" },
        children: [
          {
            index: true,
            element: <ProgressProducts />,
            handle: { title: "جاری" },
          },
          {
            path: "send-success",
            element: <SendProducts />,
            handle: { title: "فرستاده شده " },
          },
          {
            path: "cancelled",
            element: <CancelledProducts />,
            handle: { title: "لغو شده" },
          },
          {
            path: "returend",
            element: <ReturtendProducts />,
            handle: { title: "مرجوع شده" },
          },
        ],
      },
      {
        path: "user-payments",
        element: <UserPayments />,
        handle: { title: "تراکنش ها " },
      },
      {
        path: "user-wallet",
        element: <Wallet />,
        handle: { title: " کیف پول " },
      },
      {
        path: "user-activity",
        element: <UserActivitys />,
        handle: { title: "فعالیت ها" },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    handle: { title: "404" },
  },
]);
