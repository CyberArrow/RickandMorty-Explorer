import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api.jsx';

function Character() {
  const [character, setCharacter] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`character/${params.character}`).then((response) => {
      console.log(response.data);
      setCharacter(response.data);
    });
  }, [params.character]);

  return (
    <>
      {character && (
        <div>
          <p>{character.name}</p>
        </div>
      )}
    </>
  );
}

export default Character;
