import React from "react";
import { ThemeToggle } from "../../../hooks/ThemeToggle";

interface CountriesCardProps {
  countriesData: {
    flags: {
      png: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string[];
  };
}

const CountriesCard: React.FC<CountriesCardProps> = ({ countriesData }) => {
  const { flags, name, population, region, capital } = countriesData;
  const darkMode = ThemeToggle();
  return (
    <section
      className={`shadow-md cursor-pointer hover:shadow-xl duration-300 ${
        darkMode && "bg-dark-blue"
      }`}
    >
      <div className="flex justify-center w-full">
        {" "}
        <img className="h-48 object-cover w-full" src={flags?.png} alt={name?.common} />{" "}
      </div>
      <div className="font-semibold p-5">
        <h3 className="mb-3">{name?.common}</h3>
        <p>
          Population : <span className="font-normal">{population}</span>
        </p>
        <p>
          Region : <span className="font-normal">{region}</span>
        </p>
        <p>
          Capital : <span className="font-normal">{capital?.length > 0 && capital[0]}</span>
        </p>
      </div>
    </section>
  );
};

export default CountriesCard;
