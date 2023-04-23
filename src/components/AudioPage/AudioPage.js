import React from "react";
import AudioLone from "C:/Users/Rachana/OneDrive/Desktop/react course/textutils/src/Assets/AudioLone.wav"
import { useState, useEffect } from "react";
import { wait } from "@testing-library/user-event/dist/utils";

function AudioPage(props) {
  const level = 0,sum=0;
  function compareStrings(s1,s2,level,sum) {
    if(s1 == s2) {
      sum += 10*level;
    }
    else {

    }
  }
  function play() {
    new Audio(AudioLone).play()
  }
   const placeholder = 'Your message';
  return (
          <div >
            <p><h1>TEST YOUR SKILLS</h1> 
            <div text-align =  "right"> <h2>Leaderboard</h2> </div> </p>
            <br/> <h2>Level - 1</h2>
              <h3>NOTE : Enter only lower case letters</h3>
            <p>Audio -1    <button onClick={play}>Click to Play</button>     <input type="text" placeholder={placeholder} /> Score = 10</p> 
            <p>Audio -2    <button onClick={()=>{}}>Click to Play</button>     <input type="text" placeholder={placeholder} /> Score = 10</p>
            <p>Audio -3    <button onClick={()=>{}}>Click to Play</button>     <input type="text" placeholder={placeholder} /> Score = 10</p>
            <br/><hr/>
            <h2>Level - 2</h2>
            <p>Audio -1    <button onClick={()=>{}}>Click to Play</button>     <input type="text" placeholder={placeholder} /> Score = 20</p> 
            <p>Audio -2    <button onClick={()=>{}}>Click to Play</button>     <input type="text" placeholder={placeholder} /> Score = 20</p>
            <p>Audio -3    <button onClick={()=>{}}>Click to Play</button>     <input type="text" placeholder={placeholder} /> Score = 20</p>
          </div>
  );
}
export default AudioPage;