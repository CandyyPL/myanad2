import React from 'react'
import { NavMenu } from '@/components/Nav/Nav.styles.js'

const Nav = React.forwardRef((props, ref) => {
  return (
    <NavMenu ref={ref}>
      <li>Menu Option</li>
      <li>Menu Option</li>
      <li>Menu Option</li>
      <li>Menu Option</li>
    </NavMenu>
  )
})

export default Nav
