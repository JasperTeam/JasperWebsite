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
          <div className="center" style={{height:"55em"}}>
            <h2>404</h2>
            <h4>What?</h4>
          </div>
    </>
  )
}
export default Player;