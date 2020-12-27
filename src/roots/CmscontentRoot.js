import React, { Component } from 'react';
import { CmscontentPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <CmscontentPage data={data ? data : {}}/>
    }
}

export default Root;