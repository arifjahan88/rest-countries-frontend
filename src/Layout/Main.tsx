import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <main className="px-5 md:px-16 lg:px-24 p-5">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
