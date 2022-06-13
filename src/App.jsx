import beers from './data/data'; 
import './App.scss';
import Nav from './component/Filter/Filter';
//import {browserRouter as Router, Routes, Route} from "react-router-dom";
import Filter from './component/Filter/Filter';
import Cards from './component/Filter/cards/Cards';

const App = () => {
  
  return (
    <div className="App">
      <Filter/>
      <Cards arr= {beers}></Cards>
    </div>
  );
}

export default App;
