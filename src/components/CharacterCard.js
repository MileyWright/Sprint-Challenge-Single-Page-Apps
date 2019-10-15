import React from "react";
import CharacterList from './CharacterList';

const CharacterCard = (props) => {
  console.log(props)
  return (
  <CharacterList className= 'characterBody'/>
  );
};

export default CharacterCard;