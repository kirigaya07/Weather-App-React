import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for better prop type checking
import { GEO_API_URL, geoApiOptions } from "../Api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    if (onSearchChange) {
      onSearchChange(searchData); // Ensuring the function exists before calling
    }
  };

  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] }; // Return empty if input is empty
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();

      return {
        options: result.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    } catch (error) {
      console.error("Error fetching city data:", error);
      return { options: [] }; // Return empty options in case of error
    }
  };

  return (
    <div className="max-w-md mx-auto my-5">
      <AsyncPaginate
        className="w-full"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "0.75rem", // Larger rounded corners for modern look
            backgroundColor: state.isFocused ? "#4b5563" : "#1f2937", // Dark background with a focus color change
            borderColor: state.isFocused ? "#9ca3af" : "#4b5563", // Light border when focused
            color: "white", // Text color
            boxShadow: state.isFocused
              ? "0 0 5px 2px rgba(255, 255, 255, 0.3)" // Light glow when focused
              : "none",
            transition: "all 0.3s ease", // Smooth transition for focus effects
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            color: "white", // Input text color
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#9ca3af", // Lighter placeholder text color
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#374151", // Dark dropdown background
            color: "white", // Dropdown text color
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            "::-webkit-scrollbar": {
              width: "8px",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#4b5563",
              borderRadius: "4px",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#4b5563" : "#374151", // Change background color on hover
            color: state.isFocused ? "white" : "#d1d5db", // Change text color on hover
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "white", // Selected value color
          }),
        }}
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

// Adding prop-types for better prop type validation
Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired, // Ensure the prop is passed and is a function
};
