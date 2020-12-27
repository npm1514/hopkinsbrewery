import React, { Component } from 'react';
import { CmslistPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <CmslistPage data={data ? data : {}}/>
    }
}

export default Root;