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
  background-color: aliceblue;
  border: 1px solid #d0d0d0;
  border-radius: 16px;
  height: 700px;
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
    color: aliceblue;
    font-weight: 700;
    margin-top: 3px;
  }

  img {
    padding-top: 10px;
    width: 35%;
    border-radius: 50%;
  }
`

export const ContentCard = styled.div`
  padding: 16px;
  height: 50%;
  max-width: 520px;
  div {
    span {
      line-height: 2.8em;
      padding: 3px;
      border-radius: 5px;
      background-color: #04d361;
      color: aliceblue;
      margin-right: 2px;
    }
  }

  ul {
    display: flex;
    flex-flow: column wrap;
    height: inherit;
    width: inherit;
    margin: 0;
    list-style: none;
    li {
      flex: 0 0 auto;
    }
  }
`
