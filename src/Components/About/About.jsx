import React from "react";
import './About.css'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-right">
            <div className="about-para">
                <p>I was part of the Break Through Tech program, where I:</p>
                <ul>
                  <li>Got a certification in Machine Learning and AI from Cornell Tech.</li>
                  <li>Worked with ASAPP with other collegues on a project for them about identifying salient parts of a customer service conversation.</li>
                  <li>As well as participated in a Kaggle competition for the New York Botanical Garden in image classification, which my group got 92% accuracy in.</li>
                </ul>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF CODING EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About