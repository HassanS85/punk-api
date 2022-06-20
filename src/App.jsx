import beers from "./data/data.js";
import "./App.scss";
import MainContainer from "./container/mainContent/MainContainer";
import NavigationBar from "./container/navigationBar/NavigationBar";
import React, { useEffect, useState } from "react";
import list from "./component/list/List";
import filterBeers from "./component/filterBeers/FilterBeers";
import SearchBar from "./component/searchbar/SearchBar";

//import {browserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeerType, setfilteredBeerType] = useState([]);

  useEffect(()=>{
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(data => setBeers(data))},[])

    useEffect(() => {
      setfilteredBeerType(beers)
    },[beers])

  // const getBeers = async () => {
  //   let url = "https://api.punkapi.com/v2/beers";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  //   setBeers(data);
  // };
  // console.log(beers);
  // useEffect(() => {
  //   getBeers();
  //   console.log(beers);
  // }, []);

  const highAlcohol = (event) => {
    if (event.target.value) {
      const highFilter = beers.filter((beers) => beers.abv > 6);
      setfilteredBeerType(highFilter);
    } else {
      setfilteredBeerType(beers);
    }
  };

  const classicRange = (event) => {
    if (event.target.value) {
      const filteredClassicRange = beers.filter(
        (beers) => beers.first_brewed.split[1] <= 2010
      );
      setfilteredBeerType(filteredClassicRange);
    } else {
      setfilteredBeerType(beers);
    }
  };

  const highAcidity = (event) => {
    if (event.target.value) {
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
            filteredAlcohol: (event) => highAlcohol(event),
          },
          {
            name: "Classic Range",
            filteredAlcohol: (event) => classicRange(event),
          },
          {
            name: "Acidic (ph < 4)",
            filteredAlcohol: (event) => highAcidity(event),
          },
        ]}
      />
      <MainContainer arr={filteredBeerType} />
    </div>
  );
};
export default App;
