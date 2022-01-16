import React from 'react';
import '../App.css';
import {Link,useParams} from 'react-router-dom'
import * as data from './json/radios.json';
import FA from 'react-fontawesome';

 class Player extends React.Component  {
   constructor(props) {
     super(props)
  
     this.data = data
     const {id} = useParams();
     this.id = id;
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
       if(this.id === r.id) {
       return(<>
       <Link to={"/app/player/" + r.id}>
       <img id="radio" src={r.img} width="100"/>
       <div class="overlay"><div class="text">
        <FA name="play" />
       </div></div>
       </Link>
       </>)
       }
     })}
      </div>
     </div>
    </>
   )
  }
}

export default Player;