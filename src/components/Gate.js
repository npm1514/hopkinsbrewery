import React, { Component } from 'react';
import { Gate } from '../styled-components/components/gate';
import { Button } from '../styled-components/global';

class GateComponent extends Component {
  render(){
    return (
      <Gate>
        <h2>Are you 21 or older?</h2>
        <div>
          <Button onClick={this.props.selectYes}>Yes</Button>
          <a href=""><Button>No</Button></a>
        </div>
      </Gate>
    );
  }
}

export default GateComponent;
