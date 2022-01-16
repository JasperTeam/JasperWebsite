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
     <div className="container">
     {this.data.radio.map((r, i) => {
       return(<>
       <Link to={"/app/player/" + r.id}>
       <img id="radio" src={r.img} width="100"/>
       <div class="overlay"><div class="text">
        <FA name="play" />
       </div></div>
       </Link>
       </>)
     })}
      </div>
     </div>
    </>
   )
  }
}

export default Dashboard;