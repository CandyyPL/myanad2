import { BookingWrapper } from '@/components/Booking/Booking.styles.js'
import Calendar from '@/components/Calendar/Calendar.jsx'
import { useContext, useEffect, useRef, useState } from 'react'
import { BookingContext } from '@/providers/BookingProvider.jsx'
import axios from 'axios'

const Booking = () => {
  const { canBook, selectedDate, minTime, maxTime, fullTime, setFullTime } = useContext(BookingContext)

  const [error, setError] = useState(false)
  const [timeValue, setTimeValue] = useState('')

  const timeInputRef = useRef(null)
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const checkboxInputRef = useRef(null)

  const handleBook = async (e) => {
    e.preventDefault()

    const name = nameInputRef.current.value
    const email = emailInputRef.current.value
    const chkbox = checkboxInputRef.current.checked
    const time = timeInputRef.current.value

    if (name == '' || email == '' || !email.includes('@') || !chkbox || time == '') {
      setError(true)
      return
    }

    const postData = {
      items: [
        {
          id: 1,
        },
      ],
      callDate: fullTime,
      customerName: name,
      customerEmail: email,
    }

    const res = await axios.post('http://localhost:3000/payment', postData)

    window.location.replace(res.data.stripeUrl)
  }

  useEffect(() => {
    const time = timeInputRef.current.value

    let sDay = selectedDate.getDate()
    let sMonth = selectedDate.getMonth()
    const sYear = selectedDate.getFullYear()

    if (sDay < 10) sDay = '0' + sDay
    if (sMonth < 10) sMonth = '0' + sMonth

    if (time != '') setFullTime(new Date(`${sYear}-${sMonth}-${sDay}T${time}`))
  }, [timeValue])

  return (
    <BookingWrapper>
      <Calendar />
      <form action="">
        <input type="time" min={minTime} max={maxTime} ref={timeInputRef} onChange={(e) => setTimeValue(e.currentTarget.value)} value={timeValue} />
        <input type="text" placeholder="Full Name" required={true} ref={nameInputRef} />
        <input type="email" placeholder="E-mail Address" required={true} ref={emailInputRef} />
        <div className="checkbox">
          <input type="checkbox" id="input-consent" required={true} ref={checkboxInputRef} />
          <label htmlFor="input-consent">I agree to everything</label>
        </div>
        <button type="submit" className="book-button" onClick={(e) => handleBook(e)}>
          <span className="title">BOOK A CALL</span>
          <span className="sub-title">RIGHT NOW</span>
        </button>
        {error ? <div className="error">Fill all inputs in a correct way</div> : null}
      </form>
    </BookingWrapper>
  )
}

export default Booking
