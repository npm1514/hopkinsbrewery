import React, { Component } from 'react';
import { HeaderWrap, Header, Spacer } from '../styled-components/components/header';
import { Button } from '../styled-components/global';

class HeaderComponent extends Component {
  render(){
    return (
      <HeaderWrap>
        <Header>
          <a href="/"><img src="/images/logo_1_white.png"/></a>
          <h1>HOPKINS BREWING COMPANY</h1>
          <div className="orderOnline">
            <Button href="https://hopkinsbrewing.mobilebytes.com/" target="_blank">Order Online</Button>
          </div>
        </Header>

        <Spacer/>
      </HeaderWrap>
    );
  }
}

export default HeaderComponent;
