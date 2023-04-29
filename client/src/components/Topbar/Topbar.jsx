import React, { useRef } from 'react'
import { Hamburger, TopbarWrapper } from '@/components/Topbar/Topbar.styles.js'
/*import Nav from '@/components/Nav/Nav.jsx'*/
import logoImg from '@/assets/logo.png'

const Topbar = () => {
  // const navMenuRef = useRef(null)

  /*const activateMenu = (e) => {
    e.target.classList.toggle('active')
    navMenuRef.current.classList.toggle('active')
  }*/

  return (
    <TopbarWrapper>
      <div className="logo">
        <img src={logoImg} alt="logo" />
        <span>MYANAD</span>
      </div>
      <div className="menu">
        {/*<Hamburger onClick={(e) => activateMenu(e)}>
          <span className="hamburger-line"></span>
        </Hamburger>
        <Nav ref={navMenuRef} />*/}
        <ul className="desktop-menu">
          <li>Gain Advantage</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar
