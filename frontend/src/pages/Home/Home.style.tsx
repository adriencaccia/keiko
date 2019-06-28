import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 50px;
`;

const Title = styled.div`
  font-family: 'Pokemon', sans-serif;
  font-size: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 30px 30px;
`;

const Loader = styled.img`
  display: block;
  margin: auto;
`;

const Error = styled.p`
  text-align: center;
  font-size: 30px;
  color: #fe2132;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled(Link)`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
`;

export default { Container, Title, Grid, Loader, Error, NavigationContainer, Navigation };
