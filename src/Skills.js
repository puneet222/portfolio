import React from 'react';
// import Typist from 'react-typist' ;
// import 'react-typist/dist/Typist.css' ;
import 'rc-progress/assets/index.css';
import { Line, Circle } from 'rc-progress';
import ProgressiveImage from 'react-progressive-bg-image';
import kongImage from '../images/logo/kong.png' ;
import pythonImage from '../images/logo/python.png' ;
import rImage from '../images/logo/r.png' ;
import Img from 'react-image'

class SkillsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      html : 0,
      css : 0,
      js : 0,
      angular : 0,
      jquery : 0,
      react : 0,
      node : 0,
      mongo : 0,
      sql : 0,
      c : 0,
      cpp : 0,
      java : 0,
      bootstrap : 0,
      semantic : 0,
      git : 0
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    var oldObject = {
      percent : this.state.percent,
      html : this.state.html,
      css : this.state.css,
      js : this.state.js,
      angular : this.state.angular,
      jquery : this.state.jquery,
      react : this.state.react,
      node : this.state.node,
      mongo : this.state.mongo,
      sql : this.state.sql,
      c : this.state.c,
      cpp : this.state.cpp,
      java : this.state.java,
      bootstrap : this.state.bootstrap,
      semantic : this.state.semantic,
      git : this.state.git,
    };

    var knowledge = {
      percent : 80,
      html : 88,
      css : 68,
      js : 85,
      angular : 80,
      jquery : 88,
      react : 60,
      node : 85,
      mongo : 80,
      sql : 75,
      c : 80,
      cpp : 80,
      java : 70,
      bootstrap : 90,
      semantic : 50,
      git : 70,
    }

    var newObject = {} ;

    for (var key in oldObject) {
      if (oldObject.hasOwnProperty(key)) {
        if(oldObject[key] <= knowledge[key]){
          // inrement the percentage of the Progress
          newObject[key] = oldObject[key] + 1 ;
        }
      }
    }

    if(newObject.bootstrap >= knowledge.bootstrap){
      clearTimeout(this.tm);
      return;
    }

    this.setState(newObject) ;
    this.tm = setTimeout(this.increase , 10) ;
  }

  render() {
    var styles = {
      centerImage : {
        "height" : "3.5em",
        "marginLeft": "auto",
      	"marginRight" : "auto",
        "display" : "block"
      },
      skillsName1 : {
        "color" : "#BDBDBD",
        "fontSize" : "1em",
        "fontWeight" : "100",
        "textAlign" : "center"
      },
      skillsName2 : {
        "color" : "#BDBDBD",
        "fontSize" : "1em",
        "fontWeight" : "100",
        "textAlign" : "center",
        "margin" : "0"
      }
    }
    return (
      <div className="skillsBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <div className="tint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "3%" , "paddingRight" : "3%" , "width" : "100%"}}>
          <div className="ui grid">
            <div className="eight wide column">
              <div style={{"paddingLeft" : "1%", "marginTop" : "16vw" , "transform" : "translateY(50%)"}}>
                <span className="righteous" style={{"color" : "#00E5FF" , "fontSize" : "3.5em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}>Skills & Experience</span>
              </div>
            </div>
            <div className="seven wide column">
              <div className="ui grid"> {/* this is the first row of the skills */}
                <div className="five wide column">
                  <div className="skillsProgress">
                    <div style={{"width" : "70%", "position" : "absolute" , "top" : "0" , "margin" : "0 auto"}}>
                      <h5 className="handwritingFont" style={styles.skillsName1}>JavaScript</h5>
                      <Circle percent={this.state.js} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
                    </div>
                  </div>
                </div>
                <div className="ten wide column">
                  <div className="ui grid">
                    <div className="five wide column" style={{"padding" : "2%"}}>
                      <h5 className="handwritingFont" style={styles.skillsName1}>NodeJs</h5>
                      <Circle percent={this.state.node} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
                    </div>
                    <div className="five wide column" style={{"padding" : "2%"}}>
                      <h5 className="handwritingFont" style={styles.skillsName1}>MongoDB</h5>
                      <Circle percent={this.state.mongo} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
                    </div>
                    <div className="five wide column" style={{"padding" : "2%"}}>
                      <h5 className="handwritingFont" style={styles.skillsName1}>SQL</h5>
                      <Circle percent={this.state.sql} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
                    </div>
                  </div>
                </div>
              </div>  {/* ---------------  end of the fist row the skills ------------------------- */}
              <div className="ui grid"> {/* ----------  second row of skills ----------------------  */}
                <div className="three wide column">
                  <h5 className="handwritingFont" style={styles.skillsName1}>Jquery</h5>
                  <Circle percent={this.state.jquery} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square" gapDegree={155} gapPosition="bottom"/>
                </div>
                <div className="three wide column">
                  <h5 className="handwritingFont" style={styles.skillsName1}>AngularJs</h5>
                  <Circle percent={this.state.angular} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
                </div>
                <div className="three wide column">
                  <h5 className="handwritingFont" style={styles.skillsName1}>ReactJs</h5>
                  <Circle percent={this.state.react} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
                </div>
                <div className="three wide column">
                  <h5 className="handwritingFont" style={styles.skillsName1}>Bootstrap</h5>
                  <Circle percent={this.state.bootstrap} strokeWidth="8" strokeColor="#00E676" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
                </div>
                <div className="three wide column">
                  <h5 className="handwritingFont" style={styles.skillsName1}>Semantic</h5>
                  <Circle percent={this.state.semantic} strokeWidth="8" strokeColor="#00E676" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
                </div>
              </div>  {/* ---------------  end of the second row the skills ------------------------- */}
              <div className="ui grid" style={{"margin" : "0"}}> {/* ---------------  start of the third row the skills ------------------------- */}
                <div className="five wide column">
                  <h5 className="handwritingFont" style={styles.skillsName2}>C</h5>
                  <Line percent={this.state.c} strokeWidth="4" strokeColor="#FF3D00" trailWidth="4" trailColor="#616161" strokeLinecap="square" />
                </div>
                <div className="five wide column">
                  <h5 className="handwritingFont" style={styles.skillsName2}>C++</h5>
                  <Line percent={this.state.cpp} strokeWidth="4" strokeColor="#FF3D00" trailWidth="4" trailColor="#616161" strokeLinecap="square" />
                </div>
                <div className="five wide column">
                  <h5 className="handwritingFont" style={styles.skillsName2}>Java</h5>
                  <Line percent={this.state.java} strokeWidth="4" strokeColor="#FF3D00" trailWidth="4" trailColor="#616161" strokeLinecap="square" />
                </div>
              </div>  {/* ---------------  end of the third row the skills ------------------------- */}
              <div className="ui grid"> {/* ---------------  start of the forth row the skills ------------------------- */}
                <div className="sixteen wide column">
                  <h2 className="josefinSlab" style={{"textAlign" : "center" , "color" : "#00E5FF" , "fontSize" : "2em"}}>& also worked on</h2>
                </div>
              </div>  {/* ---------------  end of the forth row the skills ------------------------- */}
              <div className="ui grid"> {/* ---------------  end of the third row the skills ------------------------- */}
                <div className="five wide column">
                  <Img src={kongImage} style={styles.centerImage}/>
                    <h5 className="handwritingFont" style={styles.skillsName2}>Kong</h5>
                </div>
                <div className="five wide column">
                  <Img src={pythonImage} style={styles.centerImage}/>
                  <h5 className="handwritingFont" style={styles.skillsName2}>Python</h5>
                </div>
                <div className="five wide column">
                  <Img src={rImage} style={styles.centerImage}/>
                  <h5 className="handwritingFont" style={styles.skillsName2}>R Programming Language</h5>
                </div>
              </div>  {/* ---------------  end of the forth row the skills ------------------------- */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SkillsPage;
