import React from 'react';
import { default as Fade } from 'react-fade';
import Typist from 'react-typist' ;
import ProjectData from './projectMetaData' ;
import ProgressiveImage from 'react-progressive-bg-image';
import 'react-typist/dist/Typist.css' ;
import wikiAnalyserImage1 from '../images/Project/wikiAnalyser/serch.png' ;

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    console.log(ProjectData) ;
    this.state = {

    };
  }

  render() {

    return (
      <div className="projectBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <div className="tint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "3%" , "paddingRight" : "3%" , "width" : "100%"}}>
          <div className="ui grid">
            <div className="five wide column" style={{"backgroundColor" : "pink" , "height" : "35vh" , "padding" : "0"}}>
              <ProgressiveImage
                src={ProjectData[1]["images"][0]}
                placeholder="Developer"
                style={{
                  position : "absolute",
                  left : 0,
                  right : 0,
                  height: "35vh",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  padding: '0px'
                }}
              />
            </div>
            <div className="five wide column" style={{"backgroundColor" : "pink" , "height" : "35vh" , "padding" : "0"}}>
              <ProgressiveImage
                src={wikiAnalyserImage1}
                placeholder="Developer"
                style={{
                  position : "absolute",
                  left : 0,
                  right : 0,
                  height: "35vh",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  padding: '0px'
                }}
              />
            </div>
            <div className="five wide column" style={{"backgroundColor" : "pink" , "height" : "35vh" , "padding" : "0"}}>
              <ProgressiveImage
                src={wikiAnalyserImage1}
                placeholder="Developer"
                style={{
                  position : "absolute",
                  left : 0,
                  right : 0,
                  height: "35vh",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  padding: '0px'
                }}
              />
            </div>
            <div className="five wide column" style={{"backgroundColor" : "pink"}}>
            </div>
            <div className="five wide column" style={{"backgroundColor" : "pink"}}>
            </div>
            <div className="five wide column" style={{"backgroundColor" : "pink"}}>
            </div>
            <div className="five wide column" style={{"backgroundColor" : "pink"}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
