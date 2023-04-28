import React from 'react'
import { HeroWrapper } from '@/components/Hero/Hero.styles.js'
import stonksImg from '@/assets/stonks.png'

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="motto">
        <span>For business owners who want to drastically increase their income!</span>
      </div>
      <div className="image">
        <img src={stonksImg} alt="stonks" />
      </div>
      <div className="survey-button">
        <button>TAKE A FREE SURVEY</button>
      </div>
    </HeroWrapper>
  )
}

export default Hero
