import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import icon1 from '../src/icons/1.svg';
import icon2 from '../src/icons/2.svg';

function App() {
  
  return (
    <>
     <div style={{overflowX:'hidden'}}>
       <div className="home center">
         <img src={icon1} width="200"/>
                <h1>Jasper</h1>
                <p>Listen to your favorite radio here at Jasper!</p>
         <br></br>
         <a className="button" href="#learn-more">See more</a>
            </div>

    <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 1920 320" style={{
      width: '1920px'
,
      height: '320px'

      }}
      >
            <path fill="#b81898" fillOpacity="1" d="M0 -219L1920 -219L1920 144C1920 144 1712.11 84.8996 1439.75 123.078C1061.55 176.09 969.955 226.612 797.415 208.098C592.308 186.093 552.868 120.368 363.189 49.0614C270.761 14.3134 195.102 5.59145 0 16.0538"/>
        </svg>
     </div>
          <div id="learn-more">
        <div className="about">
            <center>
              <Link to="/app"><img src={icon2} width="200"/></Link>
              <strong>
                    <p>What is Jasper?</p>
                </strong>
                <p>Jasper is a free radio platform</p>
              <br/>
              <strong>
                    <p>Why was Jasper created?</p>
                </strong>
                <p>Jasper is not just any project, it was designed to be a real website.</p>
              <br/>
              <strong>
                    <p>Does Jasper have github?</p>
                </strong>
                <p>Nope</p>
              <br/>
                <p style={{color: "grey"}}>Click on the cube to go to the app dashboard!</p>
            </center>
        </div>
    </div>

    </>
   )
}

export default App;