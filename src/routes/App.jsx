import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import * as data from './json/radios.json';
import FA from 'react-fontawesome';
import axios from 'axios'

 class Dashboard extends React.Component  {
   constructor(props) {
     super(props)
    
     this.data = data
   }
  
   render() {
  return(
    <>
    <br/>
    <br/>
    <br/>
    {/*<div className="radios">
     {this.data.radio.map((r, i) => {
       return(<>
       <Link to={"/player/" + r.id}>
       <img id="radio" src={r.img} width="100"/>
       </Link>
       </>)
     })}
     </div>
     <br/>
     <br/>*/}
     <center>
     <h4>Music</h4>
     <div className="radios">
      {this.data.radio.filter(r => r.category === "music").map((r,i)=>{
        return(<>
       <Link to={"/player/" + r.id}>
       <img id="radio" src={r.img} width="100"/>
       </Link>
       </>)
     })}
     </div>
     <br/>
     <h4>News</h4>
     <div className="radios">
       {this.data.radio.filter(r => r.category === "news").map((r,i)=>{
        return(<>
       <Link to={"/player/" + r.id}>
       <img id="radio" src={r.img} width="100"/>
       </Link>
       </>)
     })}
     </div>
     </center>
     <center>
     <p style={{color: "grey", position: "fixed", bottom:"0"}}>Click on radio icon to listen.</p>
     </center>
    </>
   )
  }
}

export default Dashboard;