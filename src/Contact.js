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
          <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
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
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
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
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
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
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
             <span className="josefinSlab" style={{"color" : "white"}}><b>Message&nbsp;&nbsp;</b></span>
             <span>
                 <textarea className="ui computer only grid tablet only grid" style={{"position" : "relative" , "top" : "-3vh" , "left" : "9%" , "background" : "transparent" , "color" : "white" , "padding" : "0.5vw" , "width" : "35vw" , "borderRadius" : "5px" , "borderColor" : "#85b7d9" , "fontWeight" : "100" , "fontFamily" : "serif"}}></textarea>
                 <textarea className="ui mobile only grid" style={{"background" : "transparent" , "color" : "white" , "padding" : "1.5vw" , "width" : "85vw" , "borderRadius" : "5px" , "borderColor" : "#85b7d9" , "fontWeight" : "100" , "fontFamily" : "serif"}}></textarea>
             </span>
           </div>
           <br />
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "8%"}}>
             {sbutton}&nbsp;&nbsp;
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
             <span>&nbsp;&nbsp;{ebutton}</span>
           </div>
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em", "paddingLeft" : "6%"}}>
             {ebody}
           </div>
           <div className="handwritingFont" style={{"color" : "#424242","fontSize" : "1.2em"}}>
             {ehtml}
           </div>
         </div> {/*--------------------  end of computer abd tabket division ----------------*/}
       </div>
      </div>


    );
  }
  componentDidMount() {

  }
}

export default ContactPage;
