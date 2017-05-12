import React from 'react';
import { default as Fade } from 'react-fade';
import ProgressiveImage from 'react-progressive-bg-image';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css' ;
import Modal from 'react-modal' ;

var HelloModal = React.createClass({
  getInitialState: function() {
    console.log(this.props.visible) ;
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
    console.log(nextProps.visible) ;
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
    };
    this.openModal = this.openModal.bind(this);
  }

  name = "Wiki Analyser" ;
  images = [
    require('../images/Project/wikiAnalyser/search.png'),
    require('../images/Project/wikiAnalyser/graph.png'),
    require('../images/Project/wikiAnalyser/bar.png')
  ]

  myFunc(){
    alert("hahah") ;
  }

  openModal(){
    console.log("functoin call") ;
    this.setState({visible : true});
  }

  render() {
    console.log(this.props.images);
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
  }
};

    return (
      <div className="projectBackground">
        <HelloModal visible={this.state.visible}/>
        <div style={{"width" : "100%"}}>
        <Carousel axis={this.props.axis} showThumbs={false} showArrows={false} showIndicators={false} autoPlay={true} interval={2000} infiniteLoop={true} onClickItem={this.myFunc} dynamicHeight emulateTouch>
              {imagesComponent}
          </Carousel>
          <button onClick={this.openModal}>OPEN MODAL</button>
          {/*<Modal
          isOpen={true}
          style={customStyles}
          contentLabel="Example Modal"
          >

          <h2 ref="subtitle">Hello</h2>
          <button>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>*/}
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
