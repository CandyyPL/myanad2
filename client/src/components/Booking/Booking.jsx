import React from 'react'
import { BookingWrapper } from '@/components/Booking/Booking.styles.js'
import Calendar from '@/components/Calendar/Calendar.jsx'

const Booking = () => {
  return (
    <BookingWrapper>
      <Calendar />
      <button className="book-button">
        <span className="title">BOOK A CALL</span>
        <span className="sub-title">RIGHT NOW</span>
      </button>
    </BookingWrapper>
  )
}

export default Booking
