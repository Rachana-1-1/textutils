import React from "react";
import { Link } from "react-router-dom";
import AudioLone from "C:/Users/Rachana/OneDrive/Desktop/react course/textutils/src/Assets/AudioLone.wav";
import { useState } from "react";

function AudioPageL1(props) {
    const [inputString, setInputString] = useState('');
    const [score, setScore] = useState(0);
  
    const string_req = 'that is all for todays vocabulary explanation podcast';
    function checkString() {
      if (inputString === string_req) {
        setScore(10);
      } else {
        setScore(0);
      }
    }
  function play() {
    new Audio(AudioLone).play()
  }
   const placeholder = 'Type Here';
  return (
          <div >
            <p><h1>TEST YOUR SKILLS</h1> </p>
            <Link >Leaderboard</Link>
            <br/> <h2>Level - 1</h2>
              <h3>NOTE : Enter only lower case letters</h3>
            <p>Audio -1    <button onClick={play}>Click to Play</button>     <input  type="text" value={inputString} onChange={(e) => setInputString(e.target.value)}  /> Score = 10</p> 
            <button onClick={checkString}>Check</button>
            {score > 0 && <p>Score: {score}</p>}
            <button><Link to="/AudioPageL2">next</Link></button>
          </div>
  );
}
export default AudioPageL1;