import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import CountryDetails from "../Components/Home/CountryDetails/CountryDetails";

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
