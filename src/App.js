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

  removeDiv = () => {
    var username = document.getElementById("username").value ;
    var password = document.getElementById("password").value ;
    console.log(username , password) ;
    if(username === "puneet222" && password === "awesome"){
      document.getElementById("temp").style.display = "none";
    }
    else{
      document.getElementById("error").style.display = "";
    }
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

        <div className="temporary" id="temp">
          <div id="temporaryContent" style={{"textAlign" : "center" , "marginTop" : "15vh"}}>
            <h3 className="center homeContent" style={{"color" : "#00E5FF" , "fontSize" : "10vh" , "fontWeight" : "100"}}>This is the &beta; version</h3>
            <h3 className="center" style={{"color" : "white" , "fontSize" : "3.5vh" , "fontWeight" : "100"}}>You need an access to view the amazing content</h3>
            <br />
            <div className="ui input focus">
              <input type="text" placeholder="username" id="username" style={{"background" : "transparent" , "color" : "white"}}/>
            </div>
            <br />
            <br />
            <div className="ui input focus">
              <input type="password" placeholder="username" id="password" style={{"background" : "transparent" , "color" : "white"}}/>
            </div>
            <br />
            <br />
            <div className="ui animated fade button" tabIndex="0" onClick={this.removeDiv} style={{"backgroundColor" : "#EF6C00" , "color" : "white"}}>
              <div className="visible content">Welcome</div>
              <div className="hidden content">
                Allow Access
              </div>
            </div>
            <h2 id="error" className="center" style={{"color" : "red" , "fontSize" : "2vh" , "fontWeight" : "100" , "display" : "none"}}>username or password is invalid</h2>
          </div>
        </div>
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
