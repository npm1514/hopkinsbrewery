import React, { Component } from 'react';
import { Header, Footer, Gate } from '../components';
import { MainContent, CenterBox } from '../styled-components/pages/main';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import menu from '../data/menu';

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        show21Gate: false
      }
    }
    selectYes = () => {
      document.cookie = "21gate=true"
      document.body.style.position = "initial";
      document.body.style.overflow = "initial";
      this.setState({
        show21Gate: false
      })
    }
    componentDidMount(){
      if(document.cookie.indexOf("21gate=true") == -1){
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
        this.setState({
          show21Gate: true
        })
      }
    }
    render(){
      return (
          <PageWrapper>
              <Header/>
              {
                this.state.show21Gate &&
                <Gate selectYes={this.selectYes}/>
              }
              <MainContent bg="/images/brick-2-1.jpg">
                <CenterBox>
                  
                </CenterBox>
              </MainContent>
              <ContentWrapper>
                <iframe
                  className="mobileMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.680271409915!2d-111.86313898413829!3d40.72505447933057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528bb7389501c3%3A0x2ed7798a32a58a0b!2sHopkins+Brewing+Company!5e0!3m2!1sen!2sus!4v1546385279227"
                  width="320" height="200" frameBorder="0" allowFullScreen=""
                ></iframe>
                <iframe
                  className="desktopMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.680271409915!2d-111.86313898413829!3d40.72505447933057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528bb7389501c3%3A0x2ed7798a32a58a0b!2sHopkins+Brewing+Company!5e0!3m2!1sen!2sus!4v1546385279227"
                  width="600" height="450" frameBorder="0" allowFullScreen=""
                ></iframe>
              </ContentWrapper>
              <MainContent bg="/images/hopkins_sugarhouse.jpeg">
                <CenterBox>
                  <p>Sunday - Wednesday: 11am - 11pm</p>
                  <p>Thursday - Saturday: 11am - 12am</p>
                  <p>Phone: 385-528-3275</p>
                  <p>1048 E 2100 S</p>
                  <p>Salt Lake City, UT 84106</p>
                  <div>
                    <a
                      href="https://www.facebook.com/Hopkins-Brewing-Co-647095499010479"
                      target="_blank"
                    ><img src="/images/iconfinder_facebook_373409.png" /></a>
                    <a
                      href="https://www.instagram.com/hopkinsbrewingco"
                      target="_blank"
                    ><img src="/images/iconfinder_instagram_373426.png" /></a>
                    <a
                      href="https://twitter.com/BrewingHopkins"
                      target="_blank"
                    ><img src="/images/iconfinder_twitter_373400.png" /></a>
                  </div>
                </CenterBox>
              </MainContent>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Main;
