import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import CountryDetails from "../Components/Home/CountryDetails/CountryDetails";
import PageTitle from "../Components/PageTitle/PageTitle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <>
            <PageTitle title="Rest Countries" />
            <Home />
          </>
        ),
      },
      {
        path: "/country/:name",
        element: (
          <>
            <PageTitle title="Country Details" />
            <CountryDetails />
          </>
        ),
      },
    ],
  },
]);
