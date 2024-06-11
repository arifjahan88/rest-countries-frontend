import { Link } from "react-router-dom";
import CountriesCard from "./Card/CountriesCard";
import Filter from "./Filtering/Filter";
import { useGetAllCountriesQuery } from "../../app/services/endpoints/countries";
import PageLoader from "../PageLoader/PageLoader";

interface Country {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
}

const Home = () => {
  //Aoi Calling
  const { data: AllCountriesData, isLoading: AllCountriesLoading } = useGetAllCountriesQuery({});

  if (AllCountriesLoading) {
    return <PageLoader />;
  }
  return (
    <section>
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10">
        {AllCountriesData?.slice(0, 8)?.map((country: Country) => (
          <Link
            to={`/country/${country?.name?.common}`}
            key={country?.name?.common}
            state={country}
          >
            <CountriesCard countriesData={country} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
