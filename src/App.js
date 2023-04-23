import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AudioPageL1 from "./components/AudioPage/AudioPageL1";
import AudioPageL2 from "./components/AudioPage/AudioPageL2";
import AudioPageL3 from "./components/AudioPage/AudioPageL3";
import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
          <Route path="/AudioPageL1" element={<AudioPageL1/>}/>
          <Route path="/AudioPageL2" element={<AudioPageL2/>}/>
          <Route path="/AudioPageL3" element={<AudioPageL3/>}/>
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;