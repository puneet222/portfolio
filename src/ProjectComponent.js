import React from 'react';
import { default as Fade } from 'react-fade';
import ProgressiveImage from 'react-progressive-bg-image';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css' ;
// import Modal from 'react-modal' ;

var HelloModal = React.createClass({
  getInitialState: function() {
    return {
      visible: this.props.visible
    };
  },
  closeModal : function(){
    this.setState({visible : false})
  },
  componentDidMount: function() {

  },
  componentWillReceiveProps : function(nextProps) {
    this.setState({visible : nextProps.visible})
  },
  getImage : function(){
    return (
      <ProgressiveImage
        src={this.props.image}
        placeholder="Developer"
        style={{
          position : "absolute",
          left : 0,
          right : 0,
          height : "20vw",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          padding: '0px'
        }}
      />
    )
  },
  styles : {
    infoDiv : {
      "color" : "white" ,
      "fontSize" : "1em" ,
      "textAlign" : "center" ,
      "fontWeight" : "100"
    }
  },
  render: function() {
    // -------------------------  here comes the modal content  ----------------------------------
    var modal_background = (this.state.visible) ? 'ui dimmer modals page transition visible active' : 'ui dimmer modals page transition hidden' ;
    var modal_classes = (this.state.visible)? 'active' : 'hidden';
    var languages = [] ;
    var colors = ["red" , "teal" , "pink" , "blue" , "orange" , "brown" , "green" , "grey" , "black"] ;
    for(var i = 0 ; i < this.props.languages.length ; i++){
      let classes = "ui " + colors[i] + " label" ;
      let jsxElement = (
        <a className={classes}>{this.props.languages[i]}</a>
      )
      languages.push(jsxElement) ;
    }
    return (
      <div className={modal_background}>
        <div className={modal_classes}>
          <div style={{"padding" : "10%"}}>
            <i className="remove circle icon" style={{"position": "absolute" , "color" : "#F44336" , "right" : "5%" , "fontSize" : "1.6em" , "top" : "8%" , "cursor" : "pointer"}} onClick={this.closeModal}></i>
            <div className="ui grid computer only grid"> {/* ------------------  computer division start --------------------- */}
              <div className="six wide column">
                {this.getImage()}
              </div>
              <div className="ten wide column">
                <h1 style={{"color" : "white" , "fontSize" : "2.5em" , "textAlign" : "center", "letterSpacing" : "2px" , "fontFamily" : "sans-serif" , "fontWeight" : "100"}}><Fade duration={0.6}>{this.props.name}<span><a href={this.props.link} style={{"fontSize" : "0.8em"}} target="_blank">    <i className="linkify icon"></i></a></span></Fade></h1>
                <h4 className="homeContent" style={this.styles.infoDiv}><Fade duration={0.8}>{this.props.info}</Fade></h4>
                <h6 style={{"color" : "white" , "fontSize" : "1em" , "textAlign" : "right", "letterSpacing" : "1px" , "fontFamily" : "sans-serif" , "fontWeight" : "100" , "fontStyle" : "italic" , "margin" : "8%"}}>{this.props.duration}</h6>
                <div style={{"textAlign" : "right"}}>
                  {languages}
                </div>
              </div>
            </div>  {/* ------------------  computer division end --------------------- */}
            <div className="ui grid mobile only grid tablet only grid" style={{"height" : "80vh" , "overflowY" : "scroll" , "overflowX" : "hidden"}}> {/* ------------------  mobile division  --------------------- */}
              <div className="two wide column">
              </div>
              <div className="twelve wide column" style={{"height" : "20vw"}}>
                {this.getImage()}
              </div>
              <div className="ui grid">
                <div className="sixteen wide column">
                  <h1 style={{"color" : "white" , "fontSize" : "1.5em" , "textAlign" : "center", "letterSpacing" : "2px" , "fontFamily" : "sans-serif" , "fontWeight" : "100" , "marginTop" : "8%"}}><Fade duration={0.6}>{this.props.name}<span><a href={this.props.link} style={{"fontSize" : "0.8em"}} target="_blank">    <i className="linkify icon"></i></a></span></Fade></h1>
                  <h4 className="homeContent" style={this.styles.infoDiv}><Fade duration={0.8}>{this.props.info}</Fade></h4>
                  <h6 style={{"color" : "white" , "fontSize" : "1em" , "textAlign" : "right", "letterSpacing" : "1px" , "fontFamily" : "sans-serif" , "fontWeight" : "100" , "fontStyle" : "italic"}}>{this.props.duration}</h6>
                  <div style={{"textAlign" : "right", "marginBottom" : "10%"}}>
                    {languages}
                  </div>
                </div>
              </div>
            </div>  {/* ------------------  mobile division end --------------------- */}
          </div>

        </div>
      </div>
    );
  }
});

class ProjectComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        visible : false,
        opacity : 0.4,
        cursor : "default"
    };
    this.openModal = this.openModal.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleOut = this.handleOut.bind(this);
  }

  name = "Wiki Analyser" ;

  myFunc(){
    alert("hahah") ;
  }

  handleHover(){
    this.setState({opacity : 1 , cursor : "pointer" , visible : false}) ;
  }
  handleOut(){
    this.setState({opacity : 0.4 , cursor : "default"}) ;
  }

  openModal(){
    this.setState({visible : true});
  }

  render() {
    let imagesComponent = [] ;
    for(var i = 0 ; i < this.props.images.length ; i++){
      let jsxElement = (
        <div>
            <img src={this.props.images[i]} alt={this.props.name}/>
            {/*<p className="legend">Legend 1</p>*/}
        </div>
      )
      imagesComponent.push(jsxElement) ;
    }
    const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
    div : {
      width : "100%" ,
      opacity : this.state.opacity,
      cursor : this.state.cursor
    }
  };


    return (
      <div className="projectBackground">
        <HelloModal
        visible={this.state.visible}
        image={this.props.images[0]}
        name={this.props.name}
        info={this.props.info}
        duration={this.props.duration}
        link={this.props.link}
        languages={this.props.languages}
        />
        <div style={customStyles.div} onMouseOver={this.handleHover} onMouseOut={this.handleOut}>
        <Carousel axis={this.props.axis} showThumbs={false} showArrows={false} showIndicators={false} autoPlay={true} interval={this.props.interval} infiniteLoop={true} dynamicHeight={true} onClickItem={this.openModal}>
              {imagesComponent}
        </Carousel>
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
