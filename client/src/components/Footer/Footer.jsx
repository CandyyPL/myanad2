import React from 'react'
import { FooterWrapper } from '@/components/Footer/Footer.styles.js'
import logoImg from '@/assets/logo.png'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="top">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="contact">CONTACT US</div>
        <div className="mail">jans@myanad.com</div>
      </div>
      <div className="bottom">
        <span className="copy">&copy; 2023 All rights reserved</span>
      </div>
    </FooterWrapper>
  )
}

export default Footer
