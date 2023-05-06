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

  useEffect(() => {
    const storageCanBook = localStorage.getItem('canBook')

    if (storageCanBook === 'true') setCanBook(true)

    setLoading(false)
  }, [])

  const provide = { selectedDate, setSelectedDate, canBook, setCanBook }

  return <BookingContext.Provider value={provide}>{loading ? null : children}</BookingContext.Provider>
}

export default BookingProvider
