import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

interface FilterProps {
  filterCriteria: {
    search: string;
    region: string;
  };
  setFilterCriteria: React.Dispatch<React.SetStateAction<{ search: string; region: string }>>;
}

const Filter: React.FC<FilterProps> = ({ filterCriteria, setFilterCriteria }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (region: string) => {
    setFilterCriteria((prev) => ({ ...prev, region }));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterCriteria((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-5 py-5">
      <div className="w-full md:w-auto relative">
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent"
          placeholder="Search for a country..."
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
        </div>
      </div>
      <div className="w-full md:w-auto relative inline-block text-left" ref={dropdownRef}>
        <button
          type="button"
          className="inline-flex justify-center w-full md:w-auto rounded-md items-center border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
          onClick={toggleDropdown}
        >
          Filter by Region
          <FontAwesomeIcon icon={faChevronDown} className="-mr-1 ml-2 h-3 w-3 text-gray-400" />
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              {regions.map((region) => (
                <button
                  key={region}
                  className={`${
                    filterCriteria.region === region ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900 items-center`}
                  onClick={() => handleSelect(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
