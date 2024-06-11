interface Currency {
  name: string;
}

interface Languages {
  [key: string]: string;
}

interface NativeName {
  official: string;
  common: string;
}

interface Data {
  name: {
    nativeName: {
      [key: string]: NativeName;
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: Currency;
  };
  languages: Languages;
}

export const DataDisplay = (data: Data) => {
  const { name, population, region, subregion, capital, tld, currencies, languages } = data;

  //extract the currency names
  const getCurrencyNames = (currencyObject: { [key: string]: Currency }) => {
    return Object.keys(currencyObject)
      .map((key) => currencyObject[key]?.name)
      .join(", ");
  };

  //extract the language names
  const getLanguageNames = (languageObject: Languages) => {
    return Object.values(languageObject).join(", ");
  };

  // Extract the first native name
  const firstNativeNameKey = Object.keys(name.nativeName)[0];
  const firstNativeName = name.nativeName[firstNativeNameKey];

  return [
    {
      title: "Native Name",
      value: `${firstNativeName?.common}`,
    },
    {
      title: "Population",
      value: `${population.toLocaleString()}`,
    },
    {
      title: "Region",
      value: `${region}`,
    },
    {
      title: "Sub Region",
      value: `${subregion}`,
    },
    {
      title: "Capital",
      value: `${capital[0]}`,
    },
    {
      title: "Top Level Domain",
      value: `${tld[0]}`,
    },
    {
      title: "Currencies",
      value: getCurrencyNames(currencies),
    },
    {
      title: "Languages",
      value: getLanguageNames(languages),
    },
  ];
};
