import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <span>© Hopkins Brewing Company 2019</span>
        <span>1 (385) 528-3275</span>
      </Footer>
    );
  }
}

export default FooterComponent;
