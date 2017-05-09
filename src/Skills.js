import React from 'react';
import Typist from 'react-typist' ;
import 'react-typist/dist/Typist.css' ;

class SkillsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="skillsBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <div className="tint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "3%" , "paddingRight" : "3%" , "width" : "100%"}}>
          <div style={{"paddingLeft" : "1%"}}>
            <span className="righteous" style={{"color" : "#00E5FF" , "fontSize" : "4em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}>Skills & Experience</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPage;
