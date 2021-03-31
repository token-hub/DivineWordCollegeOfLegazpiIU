const createEventId = () => {
  return String(eventGuid++)
}

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
// let todayStr = new Date();

let eventGuid = 0;

const INITIAL_EVENTS = [
 {
   id: createEventId(),
   title: 'All-day event',
   start: '2021-03-12',
   end: '2021-03-21',
 },
 {
   id: createEventId(),
   title: 'Timed event',
   start: todayStr
 }
]

export const calendar = {
    INITIAL_EVENTS
}