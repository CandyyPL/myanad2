import React, { useState } from 'react'
import { HeroWrapper } from '@/components/Hero/Hero.styles.js'
import stonksImg from '@/assets/stonks.png'

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="desktop-left">
        <div className="motto">
          <span className="main-motto">For business owners who want to drastically increase their income!</span>
          <span className="desktop-under-motto">Take a free survey to check if your business may be lacking in leads, funnel or marketing.</span>
        </div>
        <div className="desktop-survey-button survey-button">
          <button>
            <span>FREE SURVEY</span>
          </button>
        </div>
      </div>
      <div className="desktop-right">
        <div className="image">
          <img src={stonksImg} alt="stonks" />
        </div>
      </div>
      <div className="image-button">
        <div className="image">
          <img src={stonksImg} alt="stonks" />
        </div>
        <div className="survey-button">
          <button>TAKE A FREE SURVEY</button>
        </div>
      </div>
    </HeroWrapper>
  )
}

export default Hero
