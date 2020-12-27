import React, { Component } from 'react';
import { HeaderWrap, Header, Spacer } from '../styled-components/components/header';
import { Button } from '../styled-components/global';

class HeaderComponent extends Component {
  render(){
    return (
      <HeaderWrap>
        <Header>
          <a href="/"><img src="/images/logo_1_white.png"/></a>
          <h1>HOPKINS</h1>
          <a href="https://hopkinsbrewing.mobilebytes.com/" target="_blank">
            <Button>Order Online</Button>
          </a>
        </Header>
        <Spacer/>
      </HeaderWrap>
    );
  }
}

export default HeaderComponent;
