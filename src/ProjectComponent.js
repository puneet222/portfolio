import React from 'react';
import { default as Fade } from 'react-fade';
import ProgressiveImage from 'react-progressive-bg-image';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css' ;
import Modal from 'react-modal' ;

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
  render: function() {
    // -------------------------  here comes the modal content  ----------------------------------
    var modal_background = (this.state.visible) ? 'ui dimmer modals page transition visible active' : 'ui dimmer modals page transition hidden' ;
    var modal_classes = (this.state.visible)? 'ui basic modal active' : 'ui basic modal transition hidden';
    return (
      <div className={modal_background}>
        <div className={modal_classes}>
          <div className="ui icon header">
            <i className="archive icon"></i>
            Archive Old Messages
          </div>
          <div className="content">
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
          </div>
          <div className="actions">
            <div className="ui red basic cancel inverted button">
              <i className="remove icon"></i>
              No
            </div>
            <div className="ui green ok inverted button">
              <i className="checkmark icon"></i>
              Yes
            </div>
          </div>
        <button onClick={this.closeModal}>close</button>
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
        opacity : 0.7,
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
    this.setState({opacity : 1 , cursor : "pointer"}) ;
  }
  handleOut(){
    this.setState({opacity : 0.5 , cursor : "default"}) ;
  }

  openModal(){
    this.setState({visible : true});
  }

  render() {
    let imagesComponent = [] ;
    for(var i = 0 ; i < this.props.images.length ; i++){
      let jsxElement = (
        <div>
            <img src={this.props.images[i]} />
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
        <HelloModal visible={this.state.visible}/>
        <div style={customStyles.div} onMouseOver={this.handleHover} onMouseOut={this.handleOut}>
        <Carousel axis={this.props.axis} showThumbs={false} showArrows={false} showIndicators={false} autoPlay={true} interval={2000} infiniteLoop={true} onClickItem={this.myFunc} dynamicHeight={true} onClickItem={this.openModal} emulateTouch>
              {imagesComponent}
        </Carousel>
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
