import { DateTime } from 'luxon'

type UseDateConversion = () => {
  computeDayDiff: (firstDate: DateTime, secondDate: string) => number
  todayDate: DateTime
}

const useDateConversion: UseDateConversion = () => {
  const todayDate = DateTime.local()

  const computeDayDiff = (firstDate: DateTime, secondDate: string) =>
    firstDate.diff(DateTime.fromISO(secondDate), [
      'years',
      'months',
      'days',
      'hours',
    ]).days

  return { computeDayDiff, todayDate }
}

export default useDateConversion
