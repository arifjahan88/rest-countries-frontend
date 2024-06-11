import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <main className="bg-very-light-gray px-5 md:px-16 lg:px-24 p-5">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
