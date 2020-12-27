import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CmslistContent } from '../styled-components/pages/cmslist';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Cmslist extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CmslistContent>
                  cmslist page
                </CmslistContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Cmslist;
