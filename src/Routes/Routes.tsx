import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import CountryDetails from "../components/Home/CountryDetails/CountryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:name",
        element: <CountryDetails />,
      },
    ],
  },
]);
