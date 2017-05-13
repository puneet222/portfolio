import React, { Component } from 'react';
// import SelectedFoods from './SelectedFoods';
// import FoodSearch from './FoodSearch';
import Home from './Home' ;
import About from './About' ;
import Skills from './Skills' ;
import Project from './Project' ;
import Internship from './Internship' ;
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconsLeftPadding : 0,
      homeState : false,
      aboutState : false,
      skillsState : false,
      projectState : false,
      internshipState : true,
      contactState : false,
      videoURL : "https://www.dropshots.com/video.php?u=https%3A%2F%2Fstorage04.dropshots.com%2Fphotos6000%2Fphotos%2F1388321%2F20170506%2F070642.mp4"
    };
  }

  // removeFoodItem = (itemIndex) => {
  //   const filteredFoods = this.oldState.selectedFoods.filter(
  //     (item, idx) => itemIndex !== idx,
  //   );
  //   this.setState({ selectedFoods: filteredFoods });
  // }
  //
  // addFood = (food) => {
  //   const newFoods = this.oldState.selectedFoods.concat(food);
  //   this.setState({ selectedFoods: newFoods });
  // }

  onHover = () => {
    console.log("on hover") ;
  }

  onOut = () => {
    console.log("out") ;
  }

  handleHomeClick = () => {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", "#1b1c1d");
    this.setState({
      homeState : true,
      aboutState : false,
      skillsState : false,
      projectState : false,
      internshipState : false,
      contactState : false
    })
  }

  handleAboutClick = () => {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", "#BF360C");
    this.setState({
      homeState : false,
      aboutState : true,
      skillsState : false,
      projectState : false,
      internshipState : false,
      contactState : false
    })
  }

  handleSkillsClick = () => {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", "#00E5FF");
    this.setState({
      homeState : false,
      aboutState : false,
      skillsState : true,
      projectState : false,
      internshipState : false,
      contactState : false
    })
  }

  handleProjectClick = () => {
    this.setState({
      homeState : false,
      aboutState : false,
      skillsState : false,
      projectState : true,
      internshipState : false,
      contactState : false
    })
  }

  handleInternshipClick = () => {
    this.setState({
      homeState : false,
      aboutState : false,
      skillsState : false,
      projectState : false,
      internshipState : true,
      contactState : false
    })
  }

  handleContactClick = () => {
    this.setState({
      homeState : false,
      aboutState : false,
      skillsState : false,
      projectState : false,
      internshipState : false,
      contactState : true
    })
  }

  render() {
    // const { selectedFoods } = this.oldState;

    var style = {
      "marginLeft" : 'auto',
      'marginRight' : "auto",
      'paddingLeft' : this.state.iconsLeftPadding + "px"
    };

    var iconPadding = {
      'padding' : '8px'
    };

    var homeClass = classNames({
      "item" : true,
      "active" : this.state.homeState
    });

    var aboutClass = classNames({
      "item" : true ,
      "active" : this.state.aboutState
    });

    var skillsClass = classNames({
      "item" : true ,
      "active" : this.state.skillsState
    });

    var projectClass = classNames({
      "item" : true ,
      "active" : this.state.projectState
    });

    var internshipClass = classNames({
      "item" : true ,
      "active" : this.state.internshipState
    });

    var contactClass = classNames({
      "item" : true ,
      "active" : this.state.contactState
    });

    return (
      <div className='App'>
        <div className='ui text container'>
        {
          this.state.homeState
            ? <Home videoURL={this.state.videoURL} />
            : null
        }
        {
          this.state.aboutState
            ? <About />
            : null
        }
        {
          this.state.skillsState
            ? <Skills />
            : null
        }
        {
          this.state.projectState
            ? <Project />
            : null
        }
        {
          this.state.internshipState
            ? <Internship />
            : null
        }
        </div>
        <div className="ui inverted segment" id="footer">
        {/* ------------------------------  this is division for computer and tablets ------------------------------- */}
          <div className="ui compact inverted secondary pointing menu computer only grid tablet only grid">
            <a className={homeClass} onClick={this.handleHomeClick}>
              <span>Home</span>
            </a>
            <a className={aboutClass} onClick={this.handleAboutClick}>
              About
            </a>
            <a className={skillsClass} onClick={this.handleSkillsClick}>
              Skills
            </a>
            <a className={projectClass} onClick={this.handleProjectClick}>
              Projects
            </a>
            <a className={internshipClass} onClick={this.handleInternshipClick}>
              Internships
            </a>
            <a className={contactClass} onClick={this.handleContactClick}>
              Contact
            </a>
          </div>
          {/* ------------------------------  this is division for mobiles ------------------------------- */}
            <div className="ui compact inverted secondary pointing menu mobile only grid" style={style} id="icons">
              <a className={homeClass} style={iconPadding} onClick={this.handleHomeClick} >
                <h2><i className="home icon"></i></h2>
              </a>
              <a className={aboutClass} style={iconPadding} onClick={this.handleAboutClick}>
                <h2><i className="info circle icon"></i></h2>
              </a>
              <a className={skillsClass} style={iconPadding} onClick={this.handleSkillsClick}>
                <h2><i className="terminal icon"></i></h2>
              </a>
              <a className={projectClass} style={iconPadding} onClick={this.handleProjectClick}>
                <h2><i className="code icon"></i></h2>
              </a>
              <a className={internshipClass} style={iconPadding} onClick={this.handleInternshipClick}>
                <h2><i className="cubes icon"></i></h2>
              </a>
              <a className={contactClass} style={iconPadding} onClick={this.handleContactClick}>
                <h2><i className="mail icon"></i></h2>
              </a>
            </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var divWidth = document.getElementById("icons").offsetWidth ;
    var windowWidth = window.innerWidth ;
    var leftPadding = (windowWidth-divWidth)/2 ;
    this.setState({iconsLeftPadding : leftPadding});
  }
}

export default App;
