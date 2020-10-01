import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api.jsx';

import { Container, Header, Card, HeaderCard, ContentCard } from './styles.jsx';

function Character() {
  const [character, setCharacter] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`character/${params.character}`).then(response => {
      setCharacter(response.data);
    });
  }, [params.character]);

  return (
    <>
      {character && character.episode && (
        <Container>
          <Header>
            <Link to="/characterlist">
              <FiChevronLeft size={16} />
              Voltar
            </Link>
          </Header>
          <Card key={character.id}>
            <HeaderCard>
              <div>
                <span>{character.name}</span>
              </div>
              <img src={character.image} alt="Rick" />
            </HeaderCard>
            <ContentCard>
              <span>
                Origem:
                {character.origin.name}
              </span>
              <span>
                <strong>Espécie:</strong>
                {character.species}
              </span>
              <span>
                <strong>Gênero:</strong>
                {character.gender}
              </span>
              <span>
                <strong>Status:</strong>
                {character.status}
              </span>
              <br />
              <span>Episódios:</span>
              <br />
              <ul>
                {character.episode
                  .map(epi => epi.split('/episode/')[1])
                  .map(epi => (
                    <li key={character.id + epi}>{epi}</li>
                  ))}
              </ul>
            </ContentCard>
          </Card>
        </Container>
      )}
    </>
  );
}

export default Character;
