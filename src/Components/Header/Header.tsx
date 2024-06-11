import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-xl border-b ">
      <div className="px-5 md:px-16 lg:px-24 flex justify-between items-center">
        <h1 className="text-very-dark-blue-text text-xl font-bold">Where in the world?</h1>
        <h4 className="flex items-center gap-1">
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </h4>
      </div>
    </header>
  );
};

export default Header;
