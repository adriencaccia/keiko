import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 50px;
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

export default { Container, Loader, Error };
