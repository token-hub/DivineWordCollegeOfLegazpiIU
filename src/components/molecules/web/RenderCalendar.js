import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {calendar} from '../../../data/web/Updates';

const RenderCalendar = ({data}) => {
    const {id} = data;
  // const {INITIAL_EVENTS} = calendar;

  // let eventGuid = 0;

  let state = {
    weekendsVisible: true,
    currentEvents: []
  }

  // const createEventId = () => {
  //   return String(eventGuid++)
  // }

  const renderSidebar = () => {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={state.weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  const handleWeekendsToggle = () => {
    state = {
      weekendsVisible: !state.weekendsVisible
    }
  }

  const handleEventClick = clickInfo => {
    alert(clickInfo.event.title);
  }

  const handleMouseEnter = hoverInfo => {
    alert(`${hoverInfo.event.title}`);
  }

  const handleEvents = events => {
    state = {
     currentEvents: events
    }
  }

  
const renderEventContent = eventInfo => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}


const renderSidebarEvent = event => {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

  
  const handleDateSelect = selectInfo => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  return (
    <div className='demo-app'>
    {/* {this.renderSidebar()} */}
    <div className='demo-app-main'>
      <FullCalendar
        // plugins={[dayGridPlugin]}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={state.weekendsVisible}
        initialEvents={data} // alternatively, use the `events` setting to fetch from a feed
        // select={handleDateSelect}
        // eventMouseEnter={handleMouseEnter}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
      />
    </div>
  </div>
  )
}

export default RenderCalendar
