import React from 'react';
import { default as Fade } from 'react-fade';
import Typist from 'react-typist' ;
import ProgressiveImage from 'react-progressive-bg-image';
import InternshipData from './InternshipMetaData' ;
import Certification1 from '../images/Internship/certification1.png' ;
import 'react-typist/dist/Typist.css' ;

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
    var languages = [] ;
    var colors = ["red" , "teal" , "pink" , "blue" , "orange" , "brown" , "green" , "grey" , "black"] ;
    return (
      <div className={modal_background}>
        <div className={modal_classes}>
          <i className="remove circle icon" style={{"position": "absolute" , "color" : "#F44336" , "right" : "10%" , "fontSize" : "1.6em" , "top" : "8%" , "cursor" : "pointer"}} onClick={this.closeModal}></i>
          <div style={{"padding" : "10%"}}>
            <h1 className="center white homeContent" style={{"fontSize" : "1em"}}>{this.props.info}</h1>
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
          </div>
        </div>
      </div>
    );
  }
});

class InternshipPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible : false,
      certificate : Certification1,
      link : "https://www.freecodecamp.com/puneet222/front-end-certification",
      info : "Free Code Camp Front-End Development Certificate",
    };
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

  getInternsipLogo(height , width){
    return (
      <ProgressiveImage
        src={InternshipData[0]["logo"]}
        placeholder="Developer"
        style={{
          position : "absolute",
          left : 0,
          right : 0,
          height: height,
          width : width,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          padding: '0px'
        }}
      />
    )
  }


  render() {
    var tags = [] ;
    var colors = ["yellow" , "green" , "red" , "blue" , "pink" , "teal" , "brown" , "grey" , "orange" , "black"] ;
    for(var i = 0 ; i < InternshipData[0]["languages"].length ; i++){
      var classes = "ui " + colors[i] + " label" ;
      let element = (
        <a className={classes} style={{"fontSize" : "1.1em"}}>{InternshipData[0]["languages"][i]}</a>
      )
      tags.push(element) ;
    }
    return (
      <div className="internshipBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <Modal
          visible={this.state.visible}
          certificate={this.state.certificate}
          link={this.state.link}
          info={this.state.info}
        />
        <div className="tint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "1%" , "paddingRight" : "3%" , "width" : "100%"}}>
          {/*---------------------- certification button ---------------------------*/}
          <div style={{"position" : "fixed" , "bottom" : "3.5em" , "right" : "4vw" , "zIndex" : "3"}} data-tooltip="Certifications" data-inverted="" data-position="left center">
            <button className="circular ui icon button" style={{"fontSize" : "4vh" , "backgroundColor" : "#FF9100" , "color" : "white"}} onClick={this.viewCertification}>
              <i className="certificate icon"></i>
            </button>
          </div>
          <h4 className="righteous" style={{"color" : "#FF9100" , "fontSize" : "3.5em" , "fontWeight" : "100" , "textAlign" : "center" , "paddingBottom" : "2%"}}><Fade duration={0.9}>Internships</Fade></h4>
          <div className="ui grid computer only grid tablet only grid"> {/*---------  computer tablet grid start -----------*/}
            <div className="one wide column">
            </div>
            <div className="four wide column">
              {this.getInternsipLogo("8vw" , "105%")}
            </div>
            <div className="ten wide column">
              <h4 className="homeContent center white" style={{"fontSize" : "2em" , "fontWeight" : "400" , "letterSpacing" : "2px"}}>{InternshipData[0]["name"]}  <span><a href={InternshipData[0]["link"]} style={{"fontSize" : "0.8em" , "cursor" : "pointer" , "color" : "orange"}} target="_blank">    <i className="linkify icon"></i></a></span></h4>
              <h4 className="homeContent center white" style={{"fontSize" : "1em" , "fontWeight" : "100"}}><Fade duration={0.5}>{InternshipData[0]["info"]}</Fade></h4>
              <h4 className="right white" style={{"fontSize" : "1em" , "fontWeight" : "200" , "letterSpacing" : "2px"}}><i>{InternshipData[0]["duration"]}</i></h4>
              <h4 className="right white" style={{"fontSize" : "1em" , "fontWeight" : "100" , "letterSpacing" : "1px"}}><span className="right" style={{"fontSize" : "0.5em"}}>{tags}</span></h4>
            </div>
            <div className="one wide column">
            </div>
          </div> {/*---------  computer tablet grid end -----------*/}
          <div className="ui grid mobile only grid" style={{"padding" : "2%"}}> {/*---------  mobile grid start -----------*/}
            <div className="two wide column">
            </div>
            <div className="twelve wide column" style={{"height" : "18vh"}}>
              {this.getInternsipLogo("14vh" , "100%")}
            </div>
            <div className="two wide column">
            </div>
            <div className="ui grid"> {/*-----------  inner grid start  ---------------*/}
              <div className="sixteen wide column">
                <h4 className="homeContent center white" style={{"fontSize" : "2em" , "fontWeight" : "400" , "letterSpacing" : "2px"}}>{InternshipData[0]["name"]}  <span><a href={InternshipData[0]["link"]} style={{"fontSize" : "0.8em" , "cursor" : "pointer" , "color" : "orange"}} target="_blank">    <i className="linkify icon"></i></a></span></h4>
                <h4 className="homeContent center white" style={{"fontSize" : "1em" , "fontWeight" : "100"}}><Fade duration={0.5}>{InternshipData[0]["info"]}</Fade></h4>
                <h4 className="right white" style={{"fontSize" : "1em" , "fontWeight" : "200" , "letterSpacing" : "2px"}}><i>{InternshipData[0]["duration"]}</i></h4>
                <h4 className="right white" style={{"fontSize" : "1em" , "fontWeight" : "100" , "letterSpacing" : "1px"}}><span className="right" style={{"fontSize" : "0.5em"}}>{tags}</span></h4>
              </div>
              <div className="one wide column">
              </div>
            </div>  {/*-----------  inner grid end  ---------------*/}
          </div> {/*---------  mobile grid end -----------*/}
        </div>
      </div>
    );
  }
}

export default InternshipPage;
