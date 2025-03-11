import React from "react";
import FloatingBox from "../components/FloatingBox";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <FloatingBox>
        <img src="/image.jpg" alt="Profile" className="profile-pic" />
        <p>About Me: Professional skills and experience...</p>
      </FloatingBox>
      <FloatingBox>
        <p>Contact: Email | Phone | LinkedIn</p>
      </FloatingBox>
    </div>
  );
}

export default Home;
