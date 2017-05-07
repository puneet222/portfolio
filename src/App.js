import React, { Component } from 'react';
// import SelectedFoods from './SelectedFoods';
import FoodSearch from './FoodSearch';
import Home from './Home' ;
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
      internshipState : false,
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
      'padding' : '10px'
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
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
              <source src="https://www.dropshots.com/video.php?u=https%3A%2F%2Fstorage04.dropshots.com%2Fphotos6000%2Fphotos%2F1388321%2F20170506%2F070642.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='ui text container'>
        {
          this.state.home
            ? <FoodSearch />
            : null
        }
          <Home videoURL={this.state.videoURL}/>
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
