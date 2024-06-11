import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { DataDisplay } from "./DataDisplay";

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flags, name } = location.state;
  const AllData = DataDisplay(location.state);

  // Split the data into two halves
  const middleIndex = Math.ceil(AllData.length / 2);
  const leftData = AllData.slice(0, middleIndex);
  const rightData = AllData.slice(middleIndex);

  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-4 py-2 border border-gray-300 rounded shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-10"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10">
        <img className="w-full" src={flags?.png} alt={`${name?.common} Flag`} />
        <div>
          {/* <h2 className="text-2xl font-bold mb-2">{name?.common}</h2> */}
          <h2 className="text-2xl font-bold mb-2">{name?.common}</h2>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-1/2">
              {leftData.map((entry, index) => (
                <p key={index} className="text-gray-600">
                  <span className="font-bold">{entry.title}:</span> {entry.value}
                </p>
              ))}
            </div>
            <div className="w-1/2">
              {rightData.map((entry, index) => (
                <p key={index} className="text-gray-600">
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
