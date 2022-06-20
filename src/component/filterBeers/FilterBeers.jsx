import React from "react";
import "./FilterBeers.scss";

const FilterBeers = (props) => {
  const { Range, filteredAlcohol } = props;

  return (
    <p className="filter-by">
      {Range}
      <input
        className="filter-by__checkbox"
        type="checkbox"
        onChange={filteredAlcohol}
      />
    </p>
  );
};

export default FilterBeers;
