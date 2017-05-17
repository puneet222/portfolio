import React from 'react';
import { default as Fade } from 'react-fade';
import AlertContainer from 'react-alert'
// import alertImage from '../images/icon.png' ;

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      whatsappColor : "white",
      mailColor : "white",
      facebookColor : "white",
      linkedinColor : "white",
      githubColor : "white"
    };
    this.handleIconHover = this.handleIconHover.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  alertOptions = {
    offset: 14,
    position: 'top',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.error('Email API Currently not working', {
      time: 4000,
      type: 'success'
    })
  }

  handleIconHover(obj){
    this.setState(obj) ;
  }

  handleMouseOut(){
    this.setState({
      whatsappColor : "white",
      mailColor : "white",
      facebookColor : "white",
      linkedinColor : "white",
      githubColor : "white"
    });
  }

  getMobileLabel(label){
    return (
      <h2 className="handwritingFont left" style={{"color" : "grey" , "fontSize" : "1.5em" , "marginBottom" : "5px"}}>{label}</h2>
    )
  }

  getContactInfo(){
    var whatsappIconStyle = {
      color : this.state.whatsappColor,
      fontSize : "1.8em",
      cursor : "pointer"
    }
    var mailIconStyle = {
      color : this.state.mailColor,
      fontSize : "1.8em",
      cursor : "pointer"
    }
    var facebookIconStyle = {
      color : this.state.facebookColor,
      fontSize : "1.8em",
      cursor : "pointer"
    }
    var linkedinIconStyle = {
      color : this.state.linkedinColor,
      fontSize : "1.8em",
      cursor : "pointer"
    }
    var githubIconStyle = {
      color : this.state.githubColor,
      fontSize : "1.8em",
      cursor : "pointer"
    }
    return (
      <div style={{"marginTop" : "5vh" , "marginBottom" : "10vh" , "width" : "100%"}}>
        <h1 className="righteous" style={{"fontWeight" : "100" , "fontSize" : "1.5em" , "color" : "#FF9100" , "textAlign" : "center"}}>Contact Info</h1>
        <div className="ui grid" style={{"paddingLeft" : "4vw"}}>
          <div className="three wide column" data-inverted="" data-tooltip="+91 9988182547" data-position="left center" style={{"paddingTop" : "4%"}} onMouseOver={() => this.handleIconHover({whatsappColor : "#34af23"})} onMouseOut={this.handleMouseOut}>
            <i className="whatsapp icon" style={whatsappIconStyle}></i>
          </div>
          <div className="three wide column" style={{"paddingTop" : "4%"}} onMouseOver={() => this.handleIconHover({mailColor : "#ea4335"})} onMouseOut={this.handleMouseOut}>
            <a href="mailto:aggarwal.puneet222@gmail.com?Subject=Hello%20again" target="_top" ><i className="mail icon" style={mailIconStyle}></i></a>
          </div>
          <div className="three wide column" style={{"paddingTop" : "4%"}} onMouseOver={() => this.handleIconHover({facebookColor : "#3b5998"})} onMouseOut={this.handleMouseOut}>
            <a href="#" target="_blank" ><i className="facebook icon" style={facebookIconStyle}></i></a>
          </div>
          <div className="three wide column" style={{"paddingTop" : "4%"}} onMouseOver={() => this.handleIconHover({linkedinColor : "#0077b5"})} onMouseOut={this.handleMouseOut}>
            <a href="https://www.linkedin.com/in/puneet222/" target="_blank" ><i className="linkedin icon" style={linkedinIconStyle}></i></a>
          </div>
          <div className="three wide column" style={{"paddingTop" : "4%"}} onMouseOver={() => this.handleIconHover({githubColor : "#333"})} onMouseOut={this.handleMouseOut}>
            <a href="https://github.com/puneet222" target="_blank" ><i className="github icon" style={githubIconStyle}></i></a>
          </div>
        </div>
        <div style={{"color" : "white" , "fontSize" : "1em" , "textAlign" : "center" , "marginTop" : "5vh" , "paddingLeft" : "1vw"}}>
          <i className="mobile icon" style={{"color" : "white"}}></i>
          <span>
          +91 9988182547
          </span>
          <br/>
          <i className="mail outline icon" style={{"color" : "white"}}></i>
          <span>
          aggarwal.puneet222@gmail.com
          </span>
        </div>
      </div>
    )
  }

  render() {
    var shtml = "<html>" ;
    var ehtml = "</html>" ;
    var sbody = "<body>" ;
    var ebody = "</body>" ;
    var sh1 = "<h1>" ;
    var eh1 = "</h1>" ;
    var sbutton = "<button>" ;
    var ebutton = "</button>" ;
    return (
      <div className="contactBackground" style={{"position" : "absolute", "left" : 0 , "right" : 0 , "top" : 0 , "bottom" : 0 , "overflowY" : "scroll" , "overflowX" : "hidden"}}>
       <div className="tint contactTint">
       </div>
       <div style={{"position":"absolute","zIndex" : 2,"paddingLeft" : "3%" , "paddingTop" : "3%" , "paddingRight" : "3%" , "paddingBottom" : "3%" ,  "width" : "100%"}}>
        <div className="ui computer only grid" style={{"position" : "absolute" , "right" : "4vw" , "top" : "22vh" , "width" : "34vw"}}>
          <div>
            <h1 className="righteous" style={{"fontWeight" : "100" , "fontSize" : "1.5em" , "color" : "#FF9100"}}>About this website</h1>
            <p className="josefinSlab" style={{"color" : "white" , "fontSize" : "1em"}}>
              This website was first created in Angular and then discarded due its comparatively larger reponse time and then website was created in react ,
              which is a very fast framework and due to this response time of the website is <b> 103ms </b> on average.
              <br />
              <span className="homeContent">
                Hours spend : <b>~125</b>
                <br />
                Prototypes made : <b>5</b>
              </span>
            </p>
          </div>{/*----------- end of about the website division  ---------------*/}
          {this.getContactInfo()}
        </div>{/*---------------------  end of computer division  --------------------*/}
        <div className="">
         <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
           {shtml}
         </div>
         <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
           {sbody}
         </div>
         {/*<div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
           {sh1}
         </div>*/}
         <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.3em", "paddingLeft" : "6%"}}>
           <span>{sh1}</span><Fade duration={0.9}><span className="righteous" style={{"color" : "#00E676" , "fontSize" : "2.2em", "paddingLeft" : "0%" , "paddingRight" : "0%"}}>Contact Me</span></Fade><span>{eh1}</span>
         </div>
         {/*<div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "9%"}}>
           {eh1}
         </div>*/}
          <div className="handwritingFont inlineGrid" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
             <span className="josefinSlab" style={{"color" : "white"}}><b>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </span>
             <span>
               <div className="ui input focus">
                 <input className="ui computer only grid tablet only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw"}} type="text" placeholder="Name" />
                 <input className="ui mobile only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw" , "width" : "80vw" , "marginTop" : "0"}} type="text" placeholder="Name" />
               </div>
             </span>
             <span></span>
           </div>
           <br />
           <div className="handwritingFont inlineGrid" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
             <span className="josefinSlab" style={{"color" : "white"}}><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </span>
             <span>
               <div className="ui input focus" style={{"paddingLeft" : "0.2%"}}>
                 <input className="ui computer only grid tablet only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw"}} type="text" placeholder="Email" />
                 <input className="ui mobile only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw" , "width" : "80vw" , "marginTop" : "0"}} type="text" placeholder="Email" />
               </div>
             </span>
             <span></span>
           </div>
           <br />
           <div className="handwritingFont inlineGrid" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
             <span className="josefinSlab" style={{"color" : "white"}}><b>Subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </span>
             <span>
               <div className="ui input focus">
                 <input className="ui computer only grid tablet only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw"}} type="text" placeholder="Subject" />
                 <input className="ui mobile only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw" , "width" : "80vw" , "marginTop" : "0"}} type="text" placeholder="Subject" />
               </div>
             </span>
             <span></span>
           </div>
           <br />
           <div className="handwritingFont inlineGrid" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
             <span className="josefinSlab center" style={{"color" : "white" , "textAlign" : "left" , "marginBottom" : "2vh"}}><b>Message&nbsp;&nbsp;</b></span>
                <span>
                 <textarea className="ui computer only grid tablet only grid" style={{"position" : "relative" , "left" : "4%" , "background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw" , "borderRadius" : "5px" , "borderColor" : "#85b7d9" , "fontWeight" : "100" , "fontFamily" : "serif"}}></textarea>
                 <textarea className="ui mobile only grid" style={{"position" : "relative" , "left" : "6%" , "bottom" : "20%" , "background" : "transparent" , "color" : "white" , "padding" : "1.5vw" , "width" : "80vw" , "borderRadius" : "5px" , "borderColor" : "#85b7d9" , "fontWeight" : "100" , "fontFamily" : "serif"}}></textarea>
                </span>
           </div>
           <br />
           <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />{/*-------------------  alert box  -------------------*/}
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "1%" , "paddingTop" : "2%"}}>
             {sbutton}&nbsp;&nbsp;
             <span>
             <div className="ui animated fade primary button" tabIndex="0">
               <div className="visible content">
                 <i className="send icon"></i>
                 Send
               </div>
               <div className="hidden content" onClick={this.showAlert}>
                 <i className="send icon"></i>
                 Send
               </div>
             </div>
               {/*<button className="ui active primary button">
                 <i className="send icon"></i>
                 Send
               </button>*/}
             </span>
             <span>&nbsp;&nbsp;{ebutton}</span>
           </div>
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
             {ebody}
           </div>
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
             {ehtml}
           </div>
           <div className="ui tablet only grid mobile only grid">
            {this.getContactInfo()}
           </div>
         </div> {/*--------------------  end of computer and tablet division ----------------*/}
       </div>
      </div>


    );
  }
  componentDidMount() {

  }
}

export default ContactPage;
