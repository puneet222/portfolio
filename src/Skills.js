import React from 'react';
// import Typist from 'react-typist' ;
import 'react-typist/dist/Typist.css' ;
import CircularProgressbar from 'react-circular-progressbar';

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
          <div className="ui grid">
            <div className="eight wide column">
              <div style={{"paddingLeft" : "1%", "position" : "fixed" , "bottom" : "50%" , "transform" : "translateY(50%)"}}>
                <span className="righteous" style={{"color" : "#00E5FF" , "fontSize" : "3.5em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}>Skills & Experience</span>
              </div>
            </div>
            <div className="eight wide column">
              <div className="ui grid">
                <div className="seven wide column">
                  <div className="skillsProgress">
                    <CircularProgressbar percentage={60} />
                  </div>
                </div>\
                <div className="seven wide column">
                  <div className="skillsProgress">
                    <CircularProgressbar percentage={50}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SkillsPage;
