import { Link } from "react-router-dom";
import CountriesCard from "./Card/CountriesCard";
import Filter from "./Filtering/Filter";
// import { useGetAllCountriesQuery } from "../../app/services/endpoints/countries";
// import PageLoader from "../PageLoader/PageLoader";
import { useState } from "react";
import fetchData from "../../data/AllCountriesData.json";

const Home = () => {
  const [filterCriteria, setFilterCriteria] = useState({ search: "", region: "" });

  //API call to get all countries
  // const { data: AllCountriesData, isLoading: AllCountriesLoading } = useGetAllCountriesQuery({});

  // Loading Lottie animation
  // if (AllCountriesLoading) {
  //   return <PageLoader />;
  // }

  //Because of big amount Data, I am using local data.
  const filteredCountries = fetchData?.filter((country) => {
    const matchesSearch = country?.name?.common
      .toLowerCase()
      .includes(filterCriteria?.search?.toLowerCase());
    const matchesRegion = filterCriteria?.region ? country.region === filterCriteria.region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <section>
      <Filter filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
        {filteredCountries?.slice(0, 8)?.map((country) => (
          <Link to={`/country/${country.name.common}`} key={country.name.common} state={country}>
            <CountriesCard countriesData={country} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
