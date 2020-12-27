import React, { Component } from 'react';
import { MainPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <MainPage data={data ? data : {}}/>
    }
}

export default Root;