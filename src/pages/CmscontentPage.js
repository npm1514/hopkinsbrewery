import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CmscontentContent } from '../styled-components/pages/cmscontent';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Cmscontent extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CmscontentContent>
                  cmscontent page
                </CmscontentContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Cmscontent;
