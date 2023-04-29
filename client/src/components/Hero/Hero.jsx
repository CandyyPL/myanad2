import React, { useEffect, useState } from 'react'
import { HeroWrapper } from '@/components/Hero/Hero.styles.js'
import stonksImg from '@/assets/stonks.png'

const Hero = () => {
  const vwidth = useState(innerWidth)

  console.log(vwidth)

  return (
    <HeroWrapper>
      <div className="desktop-left">
        <div className="motto">
          <span className="main-motto">For business owners who want to drastically increase their income!</span>
          {vwidth[0] >= 768 ? <span className="desktop-under-motto">Take a free survey to check if your business may be lacking in leads, funnel or marketing.</span> : null}
        </div>
        <div className="survey-button">
          <button>
            <span>FREE SURVEY</span>
          </button>
        </div>
      </div>
      {vwidth[0] >= 768 ? (
        <div className="desktop-right">
          <div className="image">
            <img src={stonksImg} alt="stonks" />
          </div>
        </div>
      ) : null}
      {vwidth[0] < 768 ? (
        <>
          <div className="image">
            <img src={stonksImg} alt="stonks" />
          </div>
          <div className="survey-button">
            <button>TAKE A FREE SURVEY</button>
          </div>
        </>
      ) : null}
    </HeroWrapper>
  )
}

export default Hero
