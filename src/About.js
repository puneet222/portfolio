import React from 'react';
import { default as Fade } from 'react-fade';
import Typist from 'react-typist' ;
import '../node_modules/react-typist/dist/Typist.css' ;

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rightPostion : false,
    };
  }

  styles = {
    divContainer : {
      "position":"absolute",
      "zIndex" : 2,
      "paddingLeft" : "3%" ,
      "paddingTop" : "3%" ,
      "paddingRight" : "3%" ,
      "width" : "100%"
    },
    htmlStyle : {
      "color" : "#424242",
      "fontSize" : "1.2em"
    },
    bodyStyle : {
      "color" : "#424242",
      "fontSize" : "1.2em",
      "paddingLeft" : "6%"
    },
    mobileDiv : {
      "maxHeight" : "70%",
      "overflowY" : "scroll" ,
      "overflowX" : "hidden",
      "paddingBottom" : "3%"
    }
  }

  render() {
    var cursorSpecs = {
      show : true,
      element: '_',
      hideWhenDone: true
    }
    var shtml = "<html>" ;
    var ehtml = "</html>" ;
    var sbody = "<body>" ;
    var ebody = "</body>" ;
    var sh1 = "<h1>" ;
    var eh1 = "</h1>" ;
    var sp = "<p>" ;
    var ep = "</p>" ;
    var company = "Morgan Stanley" ;
    var role = "UI Developer" ;
    var technology = "Angular" ;
    var aboutContent1 = "Hello! My name is Puneet Aggarwal. " ;
    var aboutContent2 =  "I did my B.E. in Computer Science from Punjab Engineering College, Chandigarh. "
    aboutContent2 += "I'm very enthusiastic about web development, and always very interested to learn about latest technologies. "
    aboutContent2 += "I also like to read blogs and in my free time I use to do sketching, painting. "
    aboutContent2 += "I'm also a TV Series addict and love to read novels."
    return (
      <div className="aboutBackground divBackground">
        <div className="tint aboutTint">
        </div>
        <div style={this.styles.divContainer}>
          <div className="handwritingFont" style={this.styles.htmlStyle}>
            {shtml}
          </div>
          <div className="handwritingFont" style={this.styles.bodyStyle}>
            {sbody}
          </div>
          {/*<div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
            {sh1}
          </div>*/}
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.3em", "paddingLeft" : "6%"}}>
            <span>{sh1}</span><Fade duration={0.9}><span className="righteous" style={{"color" : "#FF3D00" , "fontSize" : "2.2em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}>About Me</span></Fade><span>{eh1}</span>
          </div>
          {/*<div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
            {eh1}
          </div>*/}
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
            {sp}
          </div>
          <div style={{"paddingLeft" : "11%", "marginRight" : "30%"}} className="ui computer only grid tablet only grid">
            <Typist className="aboutHeading" startDelay={1500} cursor={cursorSpecs} avgTypingDelay={40}>
              <span className="homeContent" style={{"color" : "white", "fontWeight" : "400" , "fontSize" : "1em"}}>{aboutContent1} {"I am "}  <span style={{"backgroundColor" : "#0288d1"}}>{role}</span> {" working on "} <span style={{"backgroundColor" : "red"}}>{technology}</span> { " @ " } <span style={{"backgroundColor" : "#e65100"}}>{company}</span> {aboutContent2}</span>
            </Typist>
          </div>
          <div style={this.styles.mobileDiv} className="ui mobile only grid">
            <div style={{"paddingLeft" : "11%", "marginTop" : "0px" , "height" : "60%"}}>
              <Typist className="aboutHeading" startDelay={1500}  avgTypingDelay={40} cursor={{"element" : "_"}}>
                <span className="homeContent" style={{"color" : "white", "fontWeight" : "400" , "fontSize" : "1em"}}>{aboutContent1} {"I am "}  <span style={{"backgroundColor" : "#0288d1"}}>{role}</span> {" working on "} <span style={{"backgroundColor" : "red"}}>{technology}</span> { " @ " } <span style={{"backgroundColor" : "#e65100"}}>{company}</span> {aboutContent2}</span>
              </Typist>
            </div>
          </div>
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%", "marginTop" : "1%"}}>
            {ep}
          </div>
          <div className="handwritingFont" style={this.styles.bodyStyle}>
            {ebody}
          </div>
          <div className="handwritingFont" style={this.styles.htmlStyle}>
            {ehtml}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {

  }
}

export default AboutPage;
