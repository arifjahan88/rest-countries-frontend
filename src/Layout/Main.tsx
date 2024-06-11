import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div className="bg-very-light-gray min-h-screen">
      <Header />
      <main className="p-4">
        <Outlet />
        {/* <p className="text-homepage text-dark-gray">Welcome to the homepage!</p>
        <p className="text-detail-page text-dark-blue mt-4">
          This is a detail page with more text.
        </p> */}
      </main>
    </div>
  );
};

export default Main;
