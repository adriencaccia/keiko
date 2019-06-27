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

export default { Container, Title, Grid, Loader };
