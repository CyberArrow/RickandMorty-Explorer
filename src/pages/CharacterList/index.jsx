import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api.jsx';

import { Container, Header, Card, HeaderCard, ContentCard } from './styles.jsx';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('character').then((response) => {
      setCharacters(response.data);
    });
  }, [characters]);
  return (
    <>
      {characters && characters.results && (
        <Container>
          <Header>
            <Link to="/">
              <FiChevronLeft size={16} />
              Voltar
            </Link>
          </Header>
          {characters.results.map(char => (
            <Card key={char.name}>
              <HeaderCard>
                <div>
                  <span>{char.name}</span>
                </div>
                <img src={char.image} alt="Rick" />
              </HeaderCard>
              <ContentCard>
                <Link to={`/character/${char.id}`}>
                  <button type="button">Ver bio</button>
                </Link>
              </ContentCard>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default CharacterList;
