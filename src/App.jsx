import beers from "./data/data.js";
import "./App.scss";
import MainContainer from "./container/mainContent/MainContainer";
import NavigationBar from "./container/navigationBar/NavigationBar";
import React, { useEffect, useState } from "react";
import list from "./component/list/List";
import filterBeers from "./component/filterBeers/FilterBeers";
import SearchBar from "./component/searchbar/SearchBar";
import FilterBeers from "./component/filterBeers/FilterBeers";



const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeerType, setfilteredBeerType] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  useEffect(() => {
    setfilteredBeerType(beers);
  }, [beers]);

  const abvFilter = (event) => {
    if (event.target.checked) {
      const highFilter = beers.filter((beers) => beers.abv > 6);
      setfilteredBeerType(highFilter);
    } else {
      setfilteredBeerType(beers);
    }
  };

  const classicRangeFilter = (event) => {
    if (event.target.checked) {
      const filteredClassicRange = beers.filter(
        (beers) => beers.first_brewed.split[1] <= 2010
      );
      setfilteredBeerType(filteredClassicRange);
    } else {
      setfilteredBeerType(beers);
    }
  };

  const phFilter = (event) => {
    if (event.target.checked) {
      const filteredHighAcidity = beers.filter((beers) => beers.ph < 4);
      setfilteredBeerType(filteredHighAcidity);
    } else {
      setfilteredBeerType(beers);
    }
  };

  const searchThroughBeers = (event) => {
    console.log("FilterThrough", event.target.value);

    if (event.target.value) {
      console.log("Please try again");
      const searchThroughName = beers.filter((beers) =>
        beers.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setfilteredBeerType(searchThroughName);
      console.log(searchThroughName);
    } else {
      console.log(beers);
      setfilteredBeerType(beers);
    }
  };

  return (
    <div className="App">
      <NavigationBar
        searchFilter={(event) => searchThroughBeers(event)}
        filterItems={[
          {
            name: "High ABV (>6.0%)",
            filteredAlcohol: (event) => abvFilter(event),
          },
          {
            name: "Classic Range",
            filteredAlcohol: (event) => classicRangeFilter(event),
          },
          {
            name: "Acidic (ph < 4)",
            filteredAlcohol: (event) => phFilter(event),
          },
        ]}
      />
      <MainContainer arr={filteredBeerType} />
      <FilterBeers />
    </div>
  );
};
export default App;
