import React, { useState, useEffect } from 'react';
import api from '../../services/api.jsx';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('character').then((response) => {
      setCharacters(response.data.results);
    });
  }, [characters]);
  console.log(characters);
  return (
    <>
      <div>
        {characters.map(char => (
          <div>
            <img src={char.image} alt="Pesonagem" />
            <strong>{char.name}</strong>
            <p>{char.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CharacterList;
