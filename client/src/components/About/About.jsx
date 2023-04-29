import React, { useState } from 'react'
import { AboutWrapper } from '@/components/About/About.styles.js'

const About = () => {
  const vwidth = useState(innerWidth)

  return (
    <AboutWrapper>
      {vwidth[0] >= 768 ? (
        <ul className="vert-gallery">
          <li>
            <div className="photo">
              <img src="http://via.placeholder.com/512x512" alt="photo" />
            </div>
            <div className="info">
              <span className="name">Jan Stańczyk</span>
              <span className="role">Founder</span>
            </div>
          </li>
          <li>
            <div className="photo">
              <img src="http://via.placeholder.com/512x512" alt="photo" />
            </div>
            <div className="info">
              <span className="name">Marcel Betański</span>
              <span className="role">Frontend Developer</span>
            </div>
          </li>
          <li>
            <div className="photo">
              <img src="http://via.placeholder.com/512x512" alt="photo" />
            </div>
            <div className="info">
              <span className="name">Michał Zieliński</span>
              <span className="role">Designer</span>
            </div>
          </li>
        </ul>
      ) : null}
      <div className="box">
        <div className="title">ABOUT US</div>
        <div className="info">
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum exercitationem fuga illum libero magnam neque omnis placeat quaerat unde!</div>
          {vwidth[0] < 768 ? (
            <ul className="gallery">
              <li className="photo photo-smaller">
                <img src="http://via.placeholder.com/512x512" alt="photo" />
              </li>
              <li>
                <img className="photo" src="http://via.placeholder.com/512x512" alt="photo" />
              </li>
              <li className="photo photo-smaller">
                <img src="http://via.placeholder.com/512x512" alt="photo" />
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      {vwidth[0] < 768 ? (
        <div className="identity">
          <span className="name">Jan Stańczyk</span>
          <span className="role">FOUNDER</span>
        </div>
      ) : null}
    </AboutWrapper>
  )
}

export default About
