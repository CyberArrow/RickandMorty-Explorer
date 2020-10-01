import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d0d0d0;
  max-width: 700px;
  padding: 16px;
  border-radius: 16px;
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 3px;
    border-radius: 5px;
    background-color: #04d361;
  }

  img {
    padding-top: 10px;
    width: 65%;
    border-radius: 50%;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: center;

  p {
    line-height: 1.8em;
  }

  button {
    width: 120px;
    height: 40px;
    background: #04d361;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
  }
`
