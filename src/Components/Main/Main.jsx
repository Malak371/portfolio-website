import React from "react";
import './Main.css'
import profile_img from '../../assets/profile_img.jpeg'

const Main = () => {
  return (
    <div id='home' className="main">
      <img src={profile_img} alt="" />
      <h1><span>I'm Malak Abdelhakim,</span> full stack developer and machine learning engineer based in NY, USA.</h1>
      <p>I have experince with web programming and machine learning, as well as some marketing experience. I'm open to work and enjoy any fun challenging projects.</p>
      <div className="main-action">
        <a href="https://github.com/Malak371" className="main-links">GitHub</a>
        <a href="https://www.linkedin.com/in/malak-abdelhakim-906854201/" className="main-links">LinkedIn</a>
      </div>
    </div>
  )
}

export default Main