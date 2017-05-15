import React from 'react';
import { default as Fade } from 'react-fade';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getMobileLabel(label){
    return (
      <h2 className="handwritingFont left" style={{"color" : "grey" , "fontSize" : "1.5em" , "marginBottom" : "5px"}}>{label}</h2>
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
          <div className="ui computer only grid tablet only grid">
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
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
              <span className="josefinSlab" style={{"color" : "white"}}><b>Name &nbsp;&nbsp;</b> </span>
              <span>
                <div className="ui input focus">
                  <input style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw"}} type="text" placeholder="Name" />
                </div>
              </span>
              <span></span>
            </div>
            <br />
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
              <span className="josefinSlab" style={{"color" : "white"}}><b>Email&nbsp;&nbsp;&nbsp;</b> </span>
              <span>
                <div className="ui input focus" style={{"paddingLeft" : "0.2%"}}>
                  <input style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw"}} type="text" placeholder="Email" />
                </div>
              </span>
              <span></span>
            </div>
            <br />
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
              <span className="josefinSlab" style={{"color" : "white"}}><b>Subject&nbsp;&nbsp;</b> </span>
              <span>
                <div className="ui input focus">
                  <input style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw"}} type="text" placeholder="Subject" />
                </div>
              </span>
              <span></span>
            </div>
            <br />
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
              <span className="josefinSlab" style={{"color" : "white"}}><b>Message&nbsp;</b></span>
              <span>
                  <textarea style={{"background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw" , "borderRadius" : "5px" , "borderColor" : "#85b7d9" , "fontWeight" : "100" , "fontFamily" : "serif"}}></textarea>
              </span>
            </div>
            <br />
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
              {sbutton}
              <span>
              <div className="ui animated fade primary button" tabIndex="0">
                <div className="visible content">
                  <i className="send icon"></i>
                  Send
                </div>
                <div className="hidden content">
                  <i className="send icon"></i>
                  Send
                </div>
              </div>
                {/*<button className="ui active primary button">
                  <i className="send icon"></i>
                  Send
                </button>*/}
              </span>
              <span>{ebutton}</span>
            </div>
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
              {ebody}
            </div>
            <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
              {ehtml}
            </div>
          </div> {/*------------ end of computer tabet division --------------*/}
          <div className="ui mobile only grid">
            <div className="ui grid" style={{"width" : "100%" , "padding" : "0" , "marginLeft" : "0"}}>
              <div className="sixteen wide column" style={{"paddingTop" : "0" , "paddingBottom" : "12vh"}}>
                <h2 className="righteous center" style={{"textAlign" : "center" , "fontSize" : "2.5em" , "color" : "#00E676" , "fontWeight" : "100"}}>Contact Me</h2>
                {this.getMobileLabel("Name")}
                <div className="ui input focus" style={{"width" : "100%"}}>
                  <input style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw"}} type="text" placeholder="Name" />
                </div>
                {this.getMobileLabel("Email")}
                <div className="ui input focus" style={{"width" : "100%"}}>
                  <input style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw"}} type="text" placeholder="Email" />
                </div>
                {this.getMobileLabel("Subject")}
                <div className="ui input focus" style={{"width" : "100%"}}>
                  <input style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw"}} type="text" placeholder="Subject" />
                </div>
                {this.getMobileLabel("Message")}
                <textarea style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw" , "width" : "94vw" , "borderRadius" : "5px" , "borderColor" : "#85b7d9" , "fontWeight" : "100" , "fontFamily" : "serif"}}></textarea>
                <div className="ui animated fade primary button" tabIndex="0" style={{"position" : "relative" , "float" : "right"}}>
                  <div className="visible content">
                    <i className="send icon"></i>
                    Send
                  </div>
                  <div className="hidden content">
                    <i className="send icon"></i>
                    Send
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {

  }
}

export default ContactPage;
