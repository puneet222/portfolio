import React from 'react';
import Typist from 'react-typist' ;
import 'react-typist/dist/Typist.css' ;

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rightPostion : false,
    };
  }

  render() {
    var shtml = "<html>" ;
    var ehtml = "</html>" ;
    var sbody = "<body>" ;
    var ebody = "</body>" ;
    var sh1 = "<h1>" ;
    var eh1 = "</h1>" ;
    var sp = "<p>" ;
    var ep = "</p>" ;
    var aboutContent = "Hello! My name is Puneet Aggarwal. " ;
    aboutContent += "Currently I'm pursuing B.E. (Computer Science) from PEC University of Technology, Chandigarh. "
    aboutContent += "I'm very enthusiastic about web development, and always very interested to learn about latest technologies. "
    aboutContent += "I also like to read blogs and sometimes in my free time I use to do sketching, painting. "
    aboutContent += "I'm also a TV Series addict and love to read novels."
    return (
      <div className="aboutBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <div className="tint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "3%" , "paddingRight" : "3%" , "width" : "100%"}}>
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
            {shtml}
          </div>
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
            {sbody}
          </div>
          {/*<div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
            {sh1}
          </div>*/}
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.3em", "paddingLeft" : "6%"}}>
            <span>{sh1}</span><span className="righteous" style={{"color" : "#FF3D00" , "fontSize" : "2.2em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}>About Me</span><span>{eh1}</span>
          </div>
          {/*<div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
            {eh1}
          </div>*/}
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
            {sp}
          </div>
          <div style={{"paddingLeft" : "11%", "marginRight" : "30%"}} className="ui computer only grid tablet only grid">
            <Typist>
              <span className="homeContent" style={{"color" : "white", "fontWeight" : "400" , "fontSize" : "1.2em"}}>{aboutContent}</span>
            </Typist>
          </div>
          <div style={{"maxHeight" : "70%", "overflowY" : "scroll" , "overflowX" : "hidden", "paddingBottom" : "3%"}} className="ui mobile only grid">
            <div style={{"paddingLeft" : "11%", "marginTop" : "0px" , "height" : "60%"}}>
              <Typist cursor={{"hideWhenDone" : true}}>
                <span className="homeContent" style={{"color" : "white", "fontWeight" : "400" , "fontSize" : "0.8em"}}>{aboutContent}</span>
              </Typist>
            </div>
          </div>
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%", "marginTop" : "1%"}}>
            {ep}
          </div>
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
            {ebody}
          </div>
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
            {ehtml}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
