import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 50px;
`;

const Title = styled.div`
  text-transform: capitalize;
  font-family: 'Pokemon', sans-serif;
  font-size: 40px;
  padding: 30px 0;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 50px;
  font-family: 'Pokemon', sans-serif;
  font-size: 12px;
  line-height: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
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

const Image = styled.img`
  height: 130px;
  width: 130px;
`;

export default { Container, Title, Info, Grid, Loader, Error, Image };
