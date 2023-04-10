import React from 'react'
import { NavMenu } from '@/components/Nav/Nav.styles.js'

const Nav = React.forwardRef((props, ref) => {
  return (
    <NavMenu ref={ref}>
      <li>MAIN PAGE</li>
      <li>GAIN ADVANTAGE</li>
      <li>ABOUT US</li>
      <li>BOOK A CALL</li>
    </NavMenu>
  )
})

export default Nav
