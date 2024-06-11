import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../app/slice/themeSlice";
import { ThemeToggle } from "../../hooks/ThemeToggle";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = ThemeToggle();

  // Toggle dark mode
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <header
      className={`p-4 shadow-md  ${
        darkMode
          ? "bg-very-dark-blue-bg text-very-light-gray"
          : "bg-very-light-gray text-very-dark-blue-text"
      }`}
    >
      <div className="px-5 md:px-16 lg:px-24 flex justify-between items-center">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <h4 className="flex items-center gap-1 cursor-pointer" onClick={handleToggle}>
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </h4>
      </div>
    </header>
  );
};

export default Header;
