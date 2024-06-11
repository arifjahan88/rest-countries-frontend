import { Link } from "react-router-dom";
import CountriesCard from "./Card/CountriesCard";
import Filter from "./Filtering/Filter";
import { useGetAllCountriesQuery } from "../../app/services/endpoints/countries";
import PageLoader from "../PageLoader/PageLoader";
import { useState } from "react";

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
  const [filterCriteria, setFilterCriteria] = useState({ search: "", region: "" });
  const { data: AllCountriesData, isLoading: AllCountriesLoading } = useGetAllCountriesQuery({});

  if (AllCountriesLoading) {
    return <PageLoader />;
  }

  const filteredCountries = AllCountriesData?.filter((country: Country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(filterCriteria.search.toLowerCase());
    const matchesRegion = filterCriteria.region ? country.region === filterCriteria.region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <section>
      <Filter filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10">
        {filteredCountries?.slice(0, 8)?.map((country: Country) => (
          <Link to={`/country/${country.name.common}`} key={country.name.common} state={country}>
            <CountriesCard countriesData={country} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
