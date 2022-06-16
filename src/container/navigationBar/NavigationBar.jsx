import React from "react";
import "./NavigationBar.scss";
import FilterBeers from "../../component/filterBeers/FilterBeers";
import SearchBar from "../../component/searchbar/SearchBar";
import List from "../../component/list/List";

const NavigationBar = (props) => {
  const { filterItems, searchFilter } = props;

  const alcoholFilters = filterItems.map((filterObject) => (
    <FilterBeers
      alcoholRange={filterObject.name}
      filteredAlcohol={filterObject.filteredAlcohol}
    />
  ));

  return (
    <div className="navigation__bar">
      <h1 className="navigation__bar__title"></h1>
      <SearchBar searchFilter={searchFilter} />
      <List filterElements={alcoholFilters} />
    </div>
  );
};

export default NavigationBar;
