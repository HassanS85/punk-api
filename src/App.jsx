import beers from './data/data'; 
import './App.scss';
import MainContainer from "../src/container/mainContent/MainContainer";
import NavigationBar from "../src/container/navigationBar/NavigationBar";
import React, {useState} from 'react';

//import {browserRouter as Router, Routes, Route} from "react-router-dom";
import Filter from './component/filter/Filter';
import Cards from './component/cards/Cards';

const App = () => {
  const [beertype, setbeertype] = useState ([]);
  const [filteredBeerType, setfilteredBeerType] = useState([]);

const highAlcohol = (event) => {
  if (event.target.value) {
    const highFilter = beers.filter(beer => beer.abv > 6);
    setfilteredBeerType(highFilter);

  }else {
    setfilteredBeerType(beers)
  }
}

const classicRange = (event) => {
  if (event.target.value){
    const filteredClassicRange = beers.filter(beer => beer.first_brewed.split[1] <= 2010); 
    setfilteredBeerType(filteredClassicRange);
  }else {
    setfilteredBeerType(beers);
  }
}

const highAcidity = (event) => {
  if (event.target.value){
  const filteredHighAcidity = beers.filter(beer => beer.ph < 4);
  setfilteredBeerType(filteredHighAcidity);
}else {
  setfilteredBeerType(beers);
  }
}

const searchThroughBeers = (event) => {
  console.log("FilterThrough", event.target.value)

  if (event.target.value) {
    console.log("Please try again");
    const searchThroughName = 
    beers.filter(beer => beer.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setfilteredBeerType(searchThroughName);
    console.log(searchThroughName)
  }
  else {
    console.log(beers)
    setfilteredBeerType(beers);
  }

  return (
    <div className="App">
            <MainContainer arr={filteredBeerType}/>
            <Cards arr={filteredBeerType}></Cards>
    </div>
  );
}
}
export default App;
