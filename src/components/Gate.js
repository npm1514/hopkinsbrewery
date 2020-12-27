import React, { Component } from 'react';
import { Gate, Gatebox } from '../styled-components/components/gate';
import { Button } from '../styled-components/global';

class GateComponent extends Component {
  render(){
    return (
      <Gate>

        <Gatebox>
          <img style={{width: "150px"}} src="/images/Logo_2.png"/>
          <h2>Are you 21 or older?</h2>
          <div>
            <Button onClick={this.props.selectYes}>Yes</Button>
            <a href=""><Button>No</Button></a>
          </div>
        </Gatebox>
      </Gate>
    );
  }
}

export default GateComponent;
