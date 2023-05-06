import { BookingWrapper } from '@/components/Booking/Booking.styles.js'
import Calendar from '@/components/Calendar/Calendar.jsx'

const Booking = () => {
  const handleBook = (e) => {
    e.preventDefault()
    console.log('book successful')
  }

  return (
    <BookingWrapper>
      <Calendar />
      <form>
        <input type="text" placeholder="Full Name" required={true} />
        <input type="email" placeholder="E-mail Address" required={true} />
        <div className="checkbox">
          <input type="checkbox" id="input-consent" required={true} />
          <label htmlFor="input-consent">I agree to everything</label>
        </div>
        <button className="book-button" onClick={(e) => handleBook(e)}>
          <span className="title">BOOK A CALL</span>
          <span className="sub-title">RIGHT NOW</span>
        </button>
      </form>
    </BookingWrapper>
  )
}

export default Booking
