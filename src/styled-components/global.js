import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from './colors';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  height: 200px;
  max-width: 900px;
  margin: auto;
  text-align: center;
  position: relative;
  iframe {
    border: 0;
    pointer-events: none;
    margin: auto;
    width: 100%;
  }
  .mobileMap {
    display: block;
  }
  .desktopMap {
    display: none;
  }
  @media (min-width: 700px){
    .mobileMap {
      display: none;
    }
    .desktopMap {
      display: block;
    }
    height: 450px;
  }
`;

export const Button = styled.button`
  background: #fff;
  padding: 12px;
  margin: 8px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  width: max-content;
  &:hover {
    cursor: pointer;
  }
`;
