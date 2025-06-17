import React from 'react';
import FloatingBox from '../components/FloatingBox';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <FloatingBox>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I’m Nathan January, a junior backend and software developer with a growing portfolio of full-stack projects. My work focuses on building robust backend systems using Python (Flask) and integrating them with clean, responsive frontends in TypeScript, React, and CSS. I have hands-on experience with tools like Flask-Migrate, Postman, pgAdmin, and cloud deployment platforms like Render.
          </p>
          <p>
            One of my most rewarding projects was a full-stack bank app that combined secure backend architecture with a user-friendly frontend interface. I learned how to manage relational databases, handle authentication, and troubleshoot deployment issues — all skills I now carry into every project I build.
          </p>
          <p>
            I enjoy solving complex problems, collaborating with others, and continuously pushing myself to learn new technologies and refine my craft. Whether I’m diving into a Flask API or debugging a frontend interaction, I bring curiosity, discipline, and a love for building useful, elegant software.
          </p>
          <h2>Early Career & Teaching Experience</h2>
          <p> My professional journey began in 2020 as an Administrative Clerk Intern at a local healthcare facility, where I was responsible for recording and updating patient treatment records, handling incoming calls from patients and stockbrokers, and managing inventory within the physiotherapy ward. This role helped me develop strong organizational and communication skills in a fast-paced, detail-oriented environment.
          </p>
          <p>In 2022, while pursuing my studies, I worked as a Class Assistant for Lifestyle Christian Academy, a private school outside of Worcester and soon transitioned into a full time teaching role. From 2023 to 2024, I served as a full-time educator. I was responsible for teaching Mathematics from Grades 6–9. I taught Information Technology & Computer Applications Tech. from Grades 8–12. My responsibilities included delivering engaging lessons, maintaining academic records, and fostering a positive learning environment. As a secondary responsibility, I also was responsible for maintaining the schools Microsoft Account and the maintenance of all of the schools desktops and laptops. I also served as the school's Table Tennis coach and supervised students during off-campus matches and events.
          </p>
        </div>
      </FloatingBox>
    </div>
  );
};

export default About;
