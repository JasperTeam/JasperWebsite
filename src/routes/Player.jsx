import React from 'react';
import '../App.css';
import { Link, useParams } from 'react-router-dom'
import * as data from './json/radios.json';
import FA from 'react-fontawesome';

function Player() {
  const { id } = useParams()
  return (
    <>
      <br />
      <br />
      <br />
      {data.radio.filter(r => id === r.id).map((r, i) => {
        return (
          <>
          <div className="center" style={{height:"80vh"}}>
           <img src={r.img} style={{}} id="radio" width="200"/>
						<br></br>
           <h3>{r.name}</h3>
            <audio className="audio-element" autoPlay>
              <source src={r.stream}></source>
            </audio>
            </div>
          </>
        )
      })}
    </>
  )
}
export default Player;