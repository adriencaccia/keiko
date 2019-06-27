import styled from 'styled-components';

const Card = styled.div`
  border: 5px double black;
  height: 200px;
  width: 250px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: 'Pokemon', sans-serif;
  font-size: 12px;
  line-height: 16px;
`;

const Header = styled.div`
  font-size: 15px;
`;

export default { Card, Header };
