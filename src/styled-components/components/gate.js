import styled from 'styled-components';
export const Gate = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vh - 32px);
  background-color: #ffffff;
  color: #000;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #8d8d8d;
  z-index: 50;
  button:hover {
    pointer: cursor;
    background-color: #8d8d8d;
    z-index: 100;
  }
`;
