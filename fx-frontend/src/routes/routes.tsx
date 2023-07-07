import { createBrowserRouter } from "react-router-dom";
import { Transactions } from "../pages/Transactions";
import { Root } from "../pages/Root";
import { CurrencyConverter } from "../pages/CurrencyConverter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/currency-converter",
        element: <CurrencyConverter />,
      },
    ],
  },
]);
export { router };
