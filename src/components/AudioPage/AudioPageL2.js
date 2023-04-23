import React from "react";
import { Link } from "react-router-dom";
import AudioLtwo from "C:/Users/Rachana/OneDrive/Desktop/react course/textutils/src/Assets/AudioLtwo.wav";
import { useState } from "react";

function AudioPageL2(props) {
    const [inputString, setInputString] = useState('');
    const [score, setScore] = useState(0);
  
    const string_req = 'i think most general english text books';
    function checkString() {
      if (inputString === string_req) {
        setScore(10);
      } else {
        setScore(0);
      }
    }
  function play() {
    new Audio(AudioLtwo).play()
  }
  return (
          <div >
            <p><h1>TEST YOUR SKILLS</h1>  </p>
            <Link >Leaderboard</Link>
            <br/> <h2>Level - 1</h2>
              <h3>NOTE : Enter only lower case letters</h3>
            <p>Audio -2    <button onClick={play}>Click to Play</button>     <input  type="text" value={inputString} onChange={(e) => setInputString(e.target.value)}  /> Score = 10</p> 
            <button onClick={checkString}>Check</button>
            {<p>Score: {score}</p>}
            <button><Link to="/AudioPageL3">next</Link></button>
          </div>
  );
}
export default AudioPageL2;

