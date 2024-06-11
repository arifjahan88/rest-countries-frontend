import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { DataDisplay } from "./DataDisplay";
import { ThemeToggle } from "../../../hooks/ThemeToggle";

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const darkMode = ThemeToggle();
  const { flags, name } = location.state;
  const AllData = DataDisplay(location.state);

  // Split the data into two halves
  const middleIndex = Math.ceil(AllData.length / 2);
  const leftData = AllData.slice(0, middleIndex);
  const rightData = AllData.slice(middleIndex);

  return (
    <section
      className={`${
        darkMode ? "bg-very-dark-blue-bg text-very-light-gray" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`flex items-center px-4 py-2 border rounded shadow-sm focus:outline-none my-10 ${
          darkMode
            ? "border-gray-700 text-very-light-gray bg-very-dark-blue-bg hover:bg-gray-800 focus:ring-gray-500"
            : "border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-blue-500"
        }`}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10">
        <img className="w-full" src={flags?.png} alt={`${name?.common} Flag`} />
        <div>
          <h2 className="text-2xl font-bold mb-2">{name?.common}</h2>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-1/2">
              {leftData.map((entry, index) => (
                <p key={index} className={`${darkMode ? "text-very-light-gray" : "text-gray-600"}`}>
                  <span className="font-bold">{entry.title}:</span> {entry.value}
                </p>
              ))}
            </div>
            <div className="w-1/2">
              {rightData.map((entry, index) => (
                <p key={index} className={`${darkMode ? "text-very-light-gray" : "text-gray-600"}`}>
                  <span className="font-bold">{entry.title}:</span> {entry.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
