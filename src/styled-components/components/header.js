import styled from 'styled-components';
export const HeaderWrap = styled.div`
  width: 100vw;
  height: 87px;
`;

export const Header = styled.header`
  height: 55px;
  width: calc(100vw - 32px);
  background-color: #666;
  color: #fff;
  padding: 16px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  img {
    width: 55px;
  }
  a {
    z-index: 10;
  }
  h1 {
    font-size: 46px;
    line-height: 87px;
    position: absolute;
    display: none;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
  }
  @media(min-width: 700px){
    h1 {
      display: block;
    }
  }
`;

export const Spacer = styled.div`
  width: 100vw;
  height: 87px;
`;
