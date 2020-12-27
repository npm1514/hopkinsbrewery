import styled from 'styled-components';

export const MainContent = styled.div`
  width: 100vw;
  text-align: center;
  background-image: url("${props => props.bg}");
  background-size: cover;
  background-position: center;
  min-height: 600px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export const CenterBox = styled.div`
  max-width: 900px;
  color: #fff;
  img {
    width: 50px;
    margin: 8px;
  }
`;
