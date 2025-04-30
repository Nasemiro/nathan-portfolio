import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="floating-box home-content">
      <div className="text-section">
        <h1 className="name-title">Nathan January</h1>
        <h2 className="profession-title">Junior Backend / Software Developer</h2>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Profile"
        className="profile-img-box"
      />
    </div>
  );
};

export default Home;
