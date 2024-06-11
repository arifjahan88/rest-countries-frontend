import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const navigate = useNavigate();

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
        <img
          src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Belgium Flag"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">Belgium</h2>
          <p className="text-gray-600">Native Name: België</p>
          <p className="text-gray-600">Population: 11,319,511</p>
          <p className="text-gray-600">Region: Europe</p>
          <p className="text-gray-600">Sub Region: Western Europe</p>
          <p className="text-gray-600">Capital: Brussels</p>
          <p className="text-gray-600">Top Level Domain: .be</p>
          <p className="text-gray-600">Currencies: Euro</p>
          <p className="text-gray-600">Languages: Dutch, French, German</p>
          <p className="text-gray-600">Border Countries: France, Germany, Netherlands</p>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
