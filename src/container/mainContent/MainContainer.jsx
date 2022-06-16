import React from "react";
import "./MainContainer.scss";
import Cards from "../../component/cards/Cards";



const MainContainer = (props) => {
  const { arr } = props;
  const beersJSX = arr.map((beer) => (
    <Cards
      name={beer.name}
      image={beer.image_url}
      abv={beer.abv}
      description={beer.description}
    />
  ));
  return (
    <div className="main-container">{beersJSX}</div>
  );
};

export default MainContainer;
