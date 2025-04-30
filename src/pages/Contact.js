import React from "react";
import "../styles/Contact.css";
import FloatingBox from "../components/FloatingBox";

function Contact() {
  return (
    <div className="contact-page">
      <FloatingBox>
        <div className="contact-content">
          <h1>Contact Me</h1>
          <p>Feel free to reach out for collaboration, opportunities, or just to connect!</p>
          <div className="contact-info">
            <div>
              <strong>Phone:</strong> <span>+27 84 240 4212</span>
            </div>
            <div>
              <strong>Email:</strong>
              <ul>
                <li>15najan@gmail.com</li>
                <li>nathanjanuary10@gmail.com</li>
              </ul>
            </div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/nathan-january-b35a2b322"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Profile
              </a>
            </div>
            <div>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Nasemiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Nasemiro
              </a>
            </div>
          </div>
        </div>
      </FloatingBox>
    </div>
  );
}

export default Contact;
