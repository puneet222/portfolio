import React from 'react';
// import Typist from 'react-typist' ;
// import 'react-typist/dist/Typist.css' ;
import 'rc-progress/assets/index.css';
import { Line, Circle } from 'rc-progress';
// import { bounce } from 'react-animations';
// import { StyleSheet, css } from 'aphrodite';
import { default as Fade } from 'react-fade'
// import ProgressiveImage from 'react-progressive-bg-image';
import kongImage from '../images/logo/kong.png' ;
import pythonImage from '../images/logo/python.png' ;
import rImage from '../images/logo/r.png' ;
import Img from 'react-image' ;
import ProgressiveImage from 'react-progressive-bg-image';
import Certification1 from '../images/Internship/certification1.png' ;

var Modal = React.createClass({
  getInitialState: function() {
    return {
      visible: this.props.visible,
      certificate: this.props.certificate,
      link: this.props.link,
      info: this.props.info
    };
  },
  closeModal : function(){
    this.setState({visible : false})
  },
  componentDidMount: function() {

  },
  componentWillReceiveProps : function(nextProps) {
    this.setState({visible : nextProps.visible , certificate: nextProps.certificate , link : nextProps.link , info : nextProps.link})
  },
  getComputerImage : function(){
    return (
      <ProgressiveImage
        src={this.state.certificate}
        placeholder="Developer"
        style={{
          position : "absolute",
          left : 0,
          right : 0,
          height : "30vw",
          width : "40vw" ,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          padding: '0px'
        }}
      />
    )
  },
  getMobileImage : function(){
    return (
      <ProgressiveImage
        src={this.state.certificate}
        placeholder="Developer"
        style={{
          position : "absolute",
          left : 0,
          right : 0,
          height : "50vh",
          width : "100%" ,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          padding: '0px'
        }}
      />
    )
  },
  render: function() {
    // -------------------------  here comes the modal content  ----------------------------------
    var modal_background = (this.state.visible) ? 'ui dimmer modals page transition visible active' : 'ui dimmer modals page transition hidden' ;
    var modal_classes = (this.state.visible)? 'active' : 'hidden';
    // var languages = [] ;
    // var colors = ["red" , "teal" , "pink" , "blue" , "orange" , "brown" , "green" , "grey" , "black"] ;
    return (
      <div className={modal_background}>
        <div className={modal_classes}>
          <i className="remove circle icon" style={{"position": "absolute" , "color" : "#F44336" , "right" : "5%" , "fontSize" : "1.6em" , "top" : "8%" , "cursor" : "pointer"}} onClick={this.closeModal}></i>
          <div style={{"padding" : "10%"}}>
            <h1 className="center white homeContent" style={{"fontSize" : "1em"}}><Fade duration={0.8}>{this.props.info}</Fade></h1>
            <div className="ui grid computer only grid"> {/*--------------  grid start  ----------------------*/}
              <div className="four wide column">
              </div>
              <div className="twelve wide column">
                {this.getComputerImage()}
              </div>
            </div>  {/*--------------  grid end  ----------------------*/}
            <div className="ui grid mobile only grid tablet only grid"> {/*--------------  grid start  ----------------------*/}
              <div className="sixteen wide column">
                {this.getMobileImage()}
              </div>
            </div>  {/*--------------  grid end  ----------------------*/}
            <h4 className="center white" style={{"position" : "absolute" , "bottom" : "8%" , "right" : "10%"}}><a href={this.props.link} target="_blank" className="ui orange label">Go to link &nbsp;&nbsp;<i className="share icon"></i></a></h4>
          </div>
        </div>
      </div>
    );
  }
});


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
      git : 0,
      visible : false,
      certificate : Certification1,
      link : "https://www.freecodecamp.com/puneet222/front-end-certification",
      info : "Free Code Camp Front-End Development Certificate",
    };
    this.increase = this.increase.bind(this);
    this.openModal = this.openModal.bind(this);
    this.viewCertification = this.viewCertification.bind(this) ;
    this.viewInternshipCertificate = this.viewInternshipCertificate.bind(this) ;
  }

  openModal(){
    this.setState({visible : true});
  }

  viewInternshipCertificate(){

  }

  viewCertification(){
    this.setState({visible : true}) ;
  }

  styles = {
    centerImage : {
      "height" : "1.5em"
    },
    skillsName1 : {
      "color" : "#BDBDBD",
      "fontSize" : "2.2vh",
      "fontWeight" : "100",
      "textAlign" : "center"
    },
    skillsName2 : {
      "color" : "#BDBDBD",
      "fontSize" : "1em",
      "fontWeight" : "100",
      "textAlign" : "center",
      "margin" : "0"
    },
    buttonStyle : {
      "padding" : "5%" ,
     "width" : "100%" ,
     "backgroundColor": "#11313f"
    }
  } ;

  skillsHtmlRow1() {
    return (
      <div className="ui grid" style={{"width" : "100%" , "paddingLeft" : "10%" , "paddingRight" : "0px"}}> {/* this is the first row of the skills */}
        <div className="five wide column">
          <div className="skillsProgress">
            <div style={{"width" : "70%", "position" : "absolute" , "top" : "0" , "margin" : "0 auto"}}>
              <h5 className="handwritingFont" style={this.styles.skillsName1}>JavaScript</h5>
              <Circle percent={this.state.js} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
            </div>
          </div>
        </div>
        <div className="eleven wide column">
          <div className="ui grid">
            <div className="five wide column" style={{"padding" : "2%"}}>
              <h5 className="handwritingFont" style={this.styles.skillsName1}>NodeJs</h5>
              <Circle percent={this.state.node} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
            </div>
            <div className="five wide column" style={{"padding" : "2%"}}>
              <h5 className="handwritingFont" style={this.styles.skillsName1}>MongoDB</h5>
              <Circle percent={this.state.mongo} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
            </div>
            <div className="five wide column" style={{"padding" : "2%"}}>
              <h5 className="handwritingFont" style={this.styles.skillsName1}>SQL</h5>
              <Circle percent={this.state.sql} strokeWidth="8" strokeColor="#00E5FF" trailWidth="8" trailColor="#616161" strokeLinecap="square"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  skillsHtmlRow2() {
    return (
      <div className="ui grid" style={{"width" : "100%" , "paddingLeft" : "10%" , "paddingRight" : "0px"}}> {/* ----------  second row of skills ----------------------  */}
        <div className="three wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName1}>Jquery</h5>
          <Circle percent={this.state.jquery} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square" gapDegree={155} gapPosition="bottom"/>
        </div>
        <div className="three wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName1}>AngularJs</h5>
          <Circle percent={this.state.angular} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
        </div>
        <div className="three wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName1}>ReactJs</h5>
          <Circle percent={this.state.react} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
        </div>
        <div className="three wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName1}>Bootstrap</h5>
          <Circle percent={this.state.bootstrap} strokeWidth="8" strokeColor="#00E676" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
        </div>
        <div className="three wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName1}>Semantic</h5>
          <Circle percent={this.state.semantic} strokeWidth="8" strokeColor="#00E676" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
        </div>
      </div>
    )
  }

  skillsHtmlRow3() {
    return (
      <div className="ui grid" style={{"margin" : "0" , "width" : "100%" , "paddingLeft" : "10%" , "paddingRight" : "0px"}}> {/* ---------------  start of the third row the skills ------------------------- */}
        <div className="five wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName2}>C</h5>
          <Line percent={this.state.c} strokeWidth="4" strokeColor="#FF3D00" trailWidth="4" trailColor="#616161" strokeLinecap="square" />
        </div>
        <div className="five wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName2}>C++</h5>
          <Line percent={this.state.cpp} strokeWidth="4" strokeColor="#FF3D00" trailWidth="4" trailColor="#616161" strokeLinecap="square" />
        </div>
        <div className="five wide column">
          <h5 className="handwritingFont" style={this.styles.skillsName2}>Java</h5>
          <Line percent={this.state.java} strokeWidth="4" strokeColor="#FF3D00" trailWidth="4" trailColor="#616161" strokeLinecap="square" />
        </div>
      </div>
    )
  }

  skillsHtmlRow4() {
    return (
      <div className="ui grid" style={{"width" : "100%"}}> {/* ---------------  start of the forth row the skills ------------------------- */}
        <div className="sixteen wide column">
          <h2 className="josefinSlab" style={{"textAlign" : "center" , "color" : "#00E5FF" , "fontSize" : "2em"}}>& also worked on</h2>
        </div>
      </div>
    )
  }

  skillsHtmlRow5() {
    return (
      <div className="ui grid" style={{"width" : "100%" , "paddingLeft" : "10%" , "paddingRight" : "0px"}}> {/* ---------------  start of the fifth row the skills ------------------------- */}
        <div className="five wide column">
          <button className="ui active button" style={this.styles.buttonStyle}>
          <a href="https://www.google.co.in" target="_blank">
            <Img src={kongImage} style={this.styles.centerImage}/>
            <span style={{"marginLeft" : "10%" , "position" : "relative" , "bottom" : "5px" , "color" : "#9E9E9E"}}>Kong</span>
          </a>
          </button>
        </div>
        <div className="five wide column">
          <button className="ui active button" style={this.styles.buttonStyle}>
            <Img src={pythonImage} style={this.styles.centerImage}/>
            <span style={{"marginLeft" : "10%" , "position" : "relative" , "bottom" : "5px" , "color" : "#9E9E9E"}}>Python</span>
          </button>
        </div>
        <div className="six wide column">
          <button className="ui active button" style={this.styles.buttonStyle}>
            <Img src={rImage} style={{"height" : "1.3em"}}/>
            <span style={{"marginLeft" : "10%" , "position" : "relative" , "bottom" : "4px" , "color" : "#9E9E9E"}}>R Language</span>
          </button>
        </div>
      </div>
    )
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
    var shtml = "<html>" ;
    var ehtml = "</html>" ;
    var sbody = "<body>" ;
    var ebody = "</body>" ;
    var sh1 = "<h1>" ;
    var eh1 = "</h1>" ;
    var sp = "<p>" ;
    var ep = "</p>" ;
    var skillsInfo = "These are all my skills and experience that I gain by working on wide varities of projects." ;
    skillsInfo += " I always like to learn new skills and try to implement." ;
    skillsInfo += "  And I also try to keep myself updated with all new Technologies." ;

    return (
      <div className="skillsBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <Modal
          visible={this.state.visible}
          certificate={this.state.certificate}
          link={this.state.link}
          info={this.state.info}
        />
        <div className="tint skillsTint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "3%" , "paddingRight" : "3%" , "width" : "100%"}}>
        {/*---------------------- certification button ---------------------------*/}
        <div style={{"position" : "fixed" , "bottom" : "3.5em" , "right" : "4vw" , "zIndex" : "3"}} data-tooltip="Certifications" data-inverted="" data-position="left center">
          <button className="circular ui icon button" style={{"fontSize" : "4vh" , "backgroundColor" : "#00E5FF" , "color" : "white"}} onClick={this.viewCertification}>
            <i className="certificate icon"></i>
          </button>
        </div>
          <div className="ui grid computer only grid">
            <div className="eight wide column">
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
                {shtml}
              </div>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
                {sbody}
              </div>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
                {sh1}
              </div>
              <div style={{"paddingLeft" : "1%"}}>
                <span className="righteous" style={{"color" : "#00E5FF" , "fontSize" : "3.5em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}><Fade duration={0.9}>Superpowers</Fade></span>
              </div>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
                {eh1}
              </div>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
                {sp}
              </div>
              <span className="homeContent" style={{"color" : "white", "fontWeight" : "400" , "fontSize" : "1.2em" , "paddingLeft" : "12%" , "opacity" : "0.8"}}>{skillsInfo}</span>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
                {ep}
              </div>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
                {ebody}
              </div>
              <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
                {ehtml}
              </div>
            </div>
            <div className="seven wide column" style={{"position" : "relative" , "top" : "10vh" , "left" : "2em" , "bottom" : "1em"}}>
              {/*=======================================================================================*/}
              {this.skillsHtmlRow1()}
              {this.skillsHtmlRow2()}
              {this.skillsHtmlRow3()}
              {this.skillsHtmlRow4()}
              {this.skillsHtmlRow5()}
            </div>
          </div>{/* -------------------------- end of computer division ----------------------*/}
          <div className="ui grid mobile only grid tablet only grid">    {/* -------------------------- start of mobile and tablet division ----------------------*/}
            <div className="sixteen wide column" style={{"paddingTop" : "0"}}>
              <h4 className="righteous" style={{"color" : "#00E5FF" , "fontSize" : "11vw" , "fontWeight" : "100", "textAlign" : "center"}}><Fade duration={0.9}>Superpowers</Fade></h4>
            </div>
          </div>  {/* -------------------------- end of mobile and tablet division ----------------------*/}
          <div className="ui tablet only grid" style={{"marginTop" : "10vh"}}> {/*---------------------  start of table division  ------------------------ */}
            {this.skillsHtmlRow1()}
            {this.skillsHtmlRow2()}
            {this.skillsHtmlRow3()}
            {this.skillsHtmlRow4()}
            {this.skillsHtmlRow5()}
          </div> {/*---------------------  end of tablet division  ------------------------ */}
          <div className="ui mobile only grid" style={{"marginTop" : "25px" , "marginBottom" : "45px"}}> {/*---------------------  start of mobile division  ------------------------ */}
            {this.skillsHtmlRow1()}
            <div className="ui grid" style={{"width" : "100%" , "paddingLeft" : "10%" , "paddingRight" : "0px"}}> {/* ---------- start of second row of skills ----------------------  */}
              <div className="five wide column">
                <h5 className="handwritingFont" style={this.styles.skillsName1}>Jquery</h5>
                <Circle percent={this.state.jquery} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square" gapDegree={155} gapPosition="bottom"/>
              </div>
              <div className="five wide column">
                <h5 className="handwritingFont" style={this.styles.skillsName1}>AngularJs</h5>
                <Circle percent={this.state.angular} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
              </div>
              <div className="five wide column">
                <h5 className="handwritingFont" style={this.styles.skillsName1}>ReactJs</h5>
                <Circle percent={this.state.react} strokeWidth="8" strokeColor="#fe0954" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
              </div>
              <div className="two wide column" style={{"paddingTop" : "0" , "paddingBottom" : "0"}}>
              </div>
              <div className="five wide column" style={{"paddingTop" : "0" , "paddingBottom" : "0"}}>
                <h5 className="handwritingFont" style={this.styles.skillsName1}>Bootstrap</h5>
                <Circle percent={this.state.bootstrap} strokeWidth="8" strokeColor="#00E676" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
              </div>
              <div className="five wide column" style={{"paddingTop" : "0" , "paddingBottom" : "0"}}>
                <h5 className="handwritingFont" style={this.styles.skillsName1}>Semantic</h5>
                <Circle percent={this.state.semantic} strokeWidth="8" strokeColor="#00E676" trailWidth="8" trailColor="#616161" strokeLinecap="square"  gapDegree={155} gapPosition="bottom"/>
              </div>
              <div className="three wide column" style={{"paddingTop" : "0" , "paddingBottom" : "0"}}>
              </div>
            </div>    {/* ---------- start of second row of skills ----------------------  */}
            {this.skillsHtmlRow3()}
            {this.skillsHtmlRow4()}
            {this.skillsHtmlRow5()}
          </div>  {/*---------------------  end of table division  ------------------------ */}
        </div>
      </div>
    );
  }
}

export default SkillsPage;
