import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #53abee;
    font-weight: 700;
    transition: color 0.2s;

    &:hover {
      color: #53abee;
    }
  }
`

export const Container = styled.div`
  display: flex;
  max-height: 870px;
  flex-direction: column;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  border: 1px solid #d0d0d0;
  border-radius: 16px;
  max-width: 700px;
  padding: 16px;
  margin-top: 15px;
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 3px;
    border-radius: 5px;
    background-color: #04d361;
    font-weight: 700;
    color: aliceblue;
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
  margin-left: 12px;
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
