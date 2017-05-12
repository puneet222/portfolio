import React from 'react';
import { default as Fade } from 'react-fade';
import Typist from 'react-typist' ;
import ProjectData from './projectMetaData' ;
import ProjectComponent from './ProjectComponent' ;
import ProgressiveImage from 'react-progressive-bg-image';
import 'react-typist/dist/Typist.css' ;

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    console.log(ProjectData) ;
    this.state = {

    };
  }

  render() {
    var projects = [] ;
    var tabletProjects = [] ;
    var mobileprojects = [] ;
    for(var i = 0 ; i < ProjectData.length ; i++){
      var num = Math.floor((Math.random() * 100) + 1);
      var axis = "horizontal" ;
      if(num % 2 == 0){
        axis = "vertical" ;
      }
      let jsxElement = (
        <div className="five wide column" style={{"backgroundColor" : "transparent" , "padding" : "0"}}>
          <ProjectComponent
          axis={axis}
          images={ProjectData[i]["images"]}
          name={ProjectData[i]["name"]}
          info={ProjectData[i]["info"]}
          duration={ProjectData[i]["duration"]}
          link={ProjectData[i]["link"]}
          languages={ProjectData[i]["languages"]}
          />
        </div>
      )
      let mobileJsxElement = (
        <div className="sixteen wide column" style={{"backgroundColor" : "pink" , "padding" : "0"}}>
          <ProjectComponent
          axis={axis}
          images={ProjectData[i]["images"]}
          name={ProjectData[i]["name"]}
          info={ProjectData[i]["info"]}
          duration={ProjectData[i]["duration"]}
          link={ProjectData[i]["link"]}
          languages={ProjectData[i]["languages"]}
          />
        </div>
      )
      let tabletJsxElement = (
        <div className="eight wide column" style={{"backgroundColor" : "pink" , "padding" : "0"}}>
          <ProjectComponent
          axis={axis}
          images={ProjectData[i]["images"]}
          name={ProjectData[i]["name"]}
          info={ProjectData[i]["info"]}
          duration={ProjectData[i]["duration"]}
          link={ProjectData[i]["link"]}
          languages={ProjectData[i]["languages"]}
          />
        </div>
      )
      tabletProjects.push(tabletJsxElement) ;
      mobileprojects.push(mobileJsxElement) ;
      projects.push(jsxElement) ;
    }

    return (
      <div className="projectBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
        <div className="tint">
        </div>
        <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "1%" , "paddingRight" : "3%" , "width" : "100%"}}>
          <h4 className="righteous" style={{"color" : "#D500F9" , "fontSize" : "4em" , "fontWeight" : "100" , "textAlign" : "center" , "paddingBottom" : "2%"}}><Fade duration={0.9}>Projects</Fade></h4>
          <div className="ui grid computer only grid" style={{"marginLeft" : "3%"}}>
            {projects}
          </div>
          <div className="ui grid tablet only grid">
            {tabletProjects}
          </div>
          <div className="ui grid mobile only grid">
            {mobileprojects}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
