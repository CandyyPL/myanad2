import { createContext, useEffect, useState } from 'react'

export const BookingContext = createContext({
  selectedDate: new Date(),
  setSelectedDate: () => {},
  canBook: false,
  setCanBook: () => {},
})

const BookingProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [canBook, setCanBook] = useState(false)
  const [loading, setLoading] = useState(true)

  const [excludedDates, setExcludedDates] = useState([new Date(2023, 4, 28)])
  const [minTime, setMinTime] = useState('08:00')
  const [maxTime, setMaxTime] = useState('16:00')

  const [fullTime, setFullTime] = useState(new Date())

  useEffect(() => {
    const storageCanBook = localStorage.getItem('canBook')

    if (storageCanBook === 'true') setCanBook(true)

    setLoading(false)
  }, [])

  const provide = { selectedDate, setSelectedDate, canBook, setCanBook, excludedDates, minTime, maxTime, fullTime, setFullTime }

  return <BookingContext.Provider value={provide}>{loading ? null : children}</BookingContext.Provider>
}

export default BookingProvider
