const createEventId = () => {
  return String(eventGuid++)
}

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

let eventGuid = 0;

const INITIAL_EVENTS = [
 {
   id: createEventId(),
   title: 'All-day event',
   start: todayStr
 },
 {
   id: createEventId(),
   title: 'Timed event',
   start: todayStr + 'T12:00:00'
 }
]

export const calendar = {
    INITIAL_EVENTS
}