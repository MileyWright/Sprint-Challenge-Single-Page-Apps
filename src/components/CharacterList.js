import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
       setCharacter(response.data.results);
      })
      .catch(errors => {
        console.log('The data was not returned',errors)
      })
  }, []);
  console.log(character);
  return ( <div className='character-container'>
    <section className="character-list grid-view">
       {character.map(character => (
        <div className='characters' key={character.id}>
          <img 
            className='character-img'
            src={character.image}
            alt={character.name}
          />
          <h2>{character.name}</h2>
          <p> {character.species} that's {character.status}</p>
          <p>Location: {character.location.name}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      ))}
    </section></div>
  );
}

