import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <section >
          <div id="scroll-container" >
            <div id="scroll-text">Know your skill level    |    check leaderboard    |    compare with others   </div>
          </div>
          <main className="Home">
            <h1>Welcome to gamee__world</h1> 
            <h3>Keep track of your softskill level...</h3>
            <h1>
              <button><Link to="/login">Login</Link></button> &nbsp;&nbsp;
              <button><Link to="/signup">Signup</Link></button>
            </h1>
          </main>
    </section>
  );
}

export default Home;