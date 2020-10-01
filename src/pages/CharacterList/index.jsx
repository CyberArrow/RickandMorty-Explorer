import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api.jsx';

import { Container, Header, Card, HeaderCard, ContentCard } from './styles.jsx';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('character').then((response) => {
      setCharacters(response.data.results);
    });
  }, [characters]);
  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </Header>
        {characters.map(char => (
          <Card key={char.name}>
            <HeaderCard>
              <div>
                <span>{char.name}</span>
              </div>
              <img src={char.image} alt="Rick" />
            </HeaderCard>
            <ContentCard>
              <p>
                Specie:
                {char.species}
              </p>
              <p>
                Gender:
                {char.gender}
              </p>
              <p>
                Status:
                {char.status}
              </p>
              <Link to={`/character/${char.id}`}>
                <button type="button">Ver mais</button>
              </Link>
            </ContentCard>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CharacterList;
