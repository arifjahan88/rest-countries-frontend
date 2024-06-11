import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { ThemeToggle } from "../hooks/ThemeToggle";

const Main = () => {
  const darkMode = ThemeToggle();
  return (
    <div
      className={
        darkMode
          ? "bg-very-dark-blue-bg text-very-light-gray min-h-screen"
          : "bg-very-light-gray text-very-dark-blue-text"
      }
    >
      <Header />
      <main className="px-5 md:px-16 lg:px-24 p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
