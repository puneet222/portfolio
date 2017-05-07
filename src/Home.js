import React from 'react';
import ReactDriveIn from 'react-drive-in' ;
import backgroundVideo from '../video/out-5.ogv' ;
import backgroundImage from '../images/hny.png' ;

class HomePage extends React.Component {

  state : {
    current : "home",
  }

  render() {
    var $mountNode = document.getElementById('drive-in');
    return (
      <div id='homePage'>
        <ReactDriveIn
        show={backgroundVideo}
        poster={backgroundImage}
        />,
        $mountNode
      </div>
    );
  }
}

export default HomePage;
