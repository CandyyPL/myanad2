import React from 'react'
import { ContentWrapper, HomeWrapper } from '@/pages/Home/Home.styles.js'
import Topbar from '@/components/Topbar/Topbar.jsx'
import Hero from '@/components/Hero/Hero.jsx'
import Video from '@/components/Video/Video.jsx'
import About from '@/components/About/About.jsx'
import Booking from '@/components/Booking/Booking.jsx'
import Footer from '@/components/Footer/Footer.jsx'

const Home = () => {
  return (
    <HomeWrapper>
      <Topbar />
      <ContentWrapper>
        <Hero />
        <Video />
        <About />
        <Booking />
      </ContentWrapper>
      <Footer />
    </HomeWrapper>
  )
}

export default Home
