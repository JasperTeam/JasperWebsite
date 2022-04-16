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