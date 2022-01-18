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
    <div className="radios">
     {this.data.radio.map((r, i) => {
       return(<>
       <Link to={"/player/" + r.id}>
       <img id="radio" src={r.img} width="100"/>
       </Link>
       </>)
     })}
     </div>
     <p style={{color: "grey", position: "fixed", bottom:"0", textAlign: "center"}}>Click on radio icon to listen.</p>
    </>
   )
  }
}

export default Dashboard;