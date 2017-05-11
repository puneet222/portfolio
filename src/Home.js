import React from 'react';
import ReactDriveIn from 'react-drive-in' ;
import backgroundVideo from '../video/out-5.ogv' ;
import backgroundImage from '../images/mobileBack.jpg' ;
import { bounce } from 'react-animations';
import Radium from 'radium';
import Typist from 'react-typist' ;
import 'react-typist/dist/Typist.css' ;
import classNames from 'classnames';
import ProgressiveImage from 'react-progressive-bg-image';
import { default as Fade } from 'react-fade';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rightPostion : false,
    };
  }

  tabRight = () => {
    console.log(this.state) ;
    console.log("ga") ;
    this.setState({rightPostion : true});
    console.log(this.state) ;
  }

  render() {
    var subHeading1 = "I'm"  ;
    var subHeading2 = "<FullStack />" ;
    var subheading3 = "Developer" ;
    var subHeadingClass = classNames({
      typeFont : true,
      rightPosition : this.state.rightPostion
    });
    var cursorSpecs = {
      show : true,
      "element": '|',
      hideWhenDone: true
    }
    const styles = {
      "position" : "absolute",
      "width" : "82%",
      "top" : "30vh",
      "left" : "0",
      "right" : "0",
      "margin" : "0 auto",
      "color" : "white",
      "zIndex" : "2",
      "bounce": {
        animation: 'x 5s',
        animationName: Radium.keyframes(bounce, 'bounce')
      }
    }
    return (
      <div>
      <div className="ui center aligned" style={styles}>
        <h1 className="homeContent largerFont"><Fade duration={1.2}>puneet222.github.io</Fade></h1>
        <Typist avgTypingDelay={170} startDelay={1500} onTypingDone={this.tabRight} cursor={cursorSpecs} >
          <span className={subHeadingClass}>{subHeading1} <span style={{"color" : "#FF1744"}}> {subHeading2} </span> {subheading3}</span>
        </Typist>
      </div>
        <div className='ui computer only grid'>
          <ReactDriveIn
          show={backgroundVideo}
          poster={backgroundImage}
          />
          <div className="tint">
          </div>
        </div>
        <div className='ui tablet only grid' style={{"marginTop" : "0px"}}>
          <ProgressiveImage
            src={backgroundImage}
            placeholder="Developer"
            style={{
              position : "absolute",
              left : 0,
              right : 0,
              height: 1000,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              padding: '0px'
            }}
          />
          <div className="tint">
          </div>
        </div>
        <div className='ui mobile only grid' style={{"marginTop" : "0px"}}>
        <ProgressiveImage
          src={backgroundImage}
          placeholder="Developer"
          style={{
            position : "absolute",
            left : 0,
            right : 0,
            height: 700,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
          <div className="tint">
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
