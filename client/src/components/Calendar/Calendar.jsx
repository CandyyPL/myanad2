import { useContext, useEffect, useState } from 'react'
import { CalendarElement, CalendarWrapper } from '@/components/Calendar/Calendar.styles.js'
import { BookingContext } from '@/providers/BookingProvider.jsx'

const actions = {
  PREV: 0,
  NEXT: 1,
}

const Calendar = () => {
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const [priorMonthCalendarDays, setPriorMonthCalendarDays] = useState([])
  const [currentMonthCalendarDays, setCurrentMonthCalendarDays] = useState([])
  const [nextMonthCalendarDays, setNextMonthCalendarDays] = useState([])

  const [currentSettings, setCurrentSettings] = useState({
    currentMonth: '',
    priorDays: 0,
    priorLastDayNumber: 0,
    currentDays: 0,
    currentDayNumber: 0,
    currentMonthNumber: 0,
    currentYear: 2023,
  })

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const { selectedDate, setSelectedDate, excludedDates } = useContext(BookingContext)

  const selectDate = (e) => {
    if (
      Number(new Date(selectedYear, selectedMonth, Number(e.currentTarget.innerHTML))) >=
        Number(new Date(currentSettings.currentYear, currentSettings.currentMonthNumber, currentSettings.currentDayNumber)) &&
      excludedDates.some((date) => Number(date) !== Number(new Date(selectedYear, selectedMonth, Number(e.currentTarget.innerHTML))))
    ) {
      setSelectedDate(new Date(selectedYear, selectedMonth, Number(e.currentTarget.innerHTML)))
    }
  }

  const compareDates = (dateA, dateB) => {
    return dateA[0] === dateB[0] && dateA[1] === dateB[1] && dateA[2] === dateB[2]
  }

  const changeMonth = (action) => {
    switch (action) {
      case actions.NEXT:
        if (selectedMonth + 1 > 11) {
          setSelectedMonth(0)
          setSelectedYear((prev) => prev + 1)
        } else {
          setSelectedMonth((prev) => prev + 1)
        }

        break
      case actions.PREV:
        if (selectedMonth - 1 < 0) {
          setSelectedMonth(11)
          setSelectedYear((prev) => prev - 1)
        } else {
          setSelectedMonth((prev) => prev - 1)
        }

        break
    }
  }

  const getData = (month, year) => {
    const tday = new Date()
    const currentMonth = months[month]
    const lastOfPrior = new Date(year, month, 0)
    const priorDays = lastOfPrior.getDate()
    const priorLastDayNumber = lastOfPrior.getDay()

    const lastOfCurrent = new Date(year, month + 1, 0)
    const currentDays = lastOfCurrent.getDate()
    const currentDayNumber = tday.getDate()
    const currentMonthNumber = tday.getMonth()
    const currentYear = tday.getFullYear()

    setCurrentSettings({
      currentMonth,
      priorDays,
      priorLastDayNumber,
      currentDays,
      currentDayNumber,
      currentMonthNumber,
      currentYear,
    })
  }

  useEffect(() => {
    getData(selectedMonth, selectedYear)
  }, [selectedMonth])

  useEffect(() => {
    let _priorLastDay = currentSettings.priorDays
    let tempPriorCalendar = []
    let tempCurrentCalendar = []
    let tempNextCalendar = []

    for (let i = currentSettings.priorLastDayNumber - 1; i >= 0; i--) {
      tempPriorCalendar.push((_priorLastDay - i).toString())
    }

    setPriorMonthCalendarDays(tempPriorCalendar)

    for (let i = 1; i <= currentSettings.currentDays; i++) {
      tempCurrentCalendar.push(i.toString())
    }

    setCurrentMonthCalendarDays(tempCurrentCalendar)

    if (tempPriorCalendar.length + tempCurrentCalendar.length > 0) {
      const nextDayCount = 43 - (tempPriorCalendar.length + tempCurrentCalendar.length)

      for (let i = 1; i < nextDayCount; i++) {
        tempNextCalendar.push(i.toString())
      }

      if (tempNextCalendar.length > 7) tempNextCalendar = tempNextCalendar.slice(0, 6)

      setNextMonthCalendarDays(tempNextCalendar)
    }
  }, [currentSettings])

  return (
    <CalendarWrapper>
      <div className="top">
        <span onClick={() => changeMonth(actions.PREV)}>&lt;</span>
        <span className="month">
          {currentSettings.currentMonth} {selectedYear}
        </span>
        <span onClick={() => changeMonth(actions.NEXT)}>&gt;</span>
      </div>
      <div className="middle">
        {weekDays.map((wd, idx) => (
          <CalendarElement className="wd" key={idx}>
            {wd}
          </CalendarElement>
        ))}
        {priorMonthCalendarDays.length > 0 &&
          priorMonthCalendarDays.map((pmd, idx) => (
            <CalendarElement className="prior" key={idx}>
              {pmd}
            </CalendarElement>
          ))}
        {currentMonthCalendarDays.length > 0 &&
          currentMonthCalendarDays.map((cmd, idx) => (
            <CalendarElement
              className={`current ${compareDates([selectedYear, selectedMonth, Number(cmd)], [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]) ? 'selected' : ''} ${
                compareDates([selectedYear, selectedMonth, Number(cmd)], [currentSettings.currentYear, currentSettings.currentMonthNumber, currentSettings.currentDayNumber]) ? 'today' : ''
              } ${excludedDates.some((date) => Number(date) === Number(new Date(selectedYear, selectedMonth, Number(cmd)))) ? 'unav' : ''}`}
              key={idx + currentSettings.priorLastDayNumber}
              onClick={(e) => selectDate(e)}>
              {cmd}
            </CalendarElement>
          ))}
        {nextMonthCalendarDays.length > 0 &&
          nextMonthCalendarDays.map((nmd, idx) => (
            <CalendarElement className="next" key={idx + Number(currentMonthCalendarDays[currentMonthCalendarDays.length - 1])}>
              {nmd}
            </CalendarElement>
          ))}
      </div>
    </CalendarWrapper>
  )
}

export default Calendar
