import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import AddEvent from './AddEvent'

const Event = () => {
  return (
    <div>
      <Link to="/AddEvent" className="add-event-button">
        Add Event
      </Link>
      <div className="event-card">
        {/* Your event card content */}
        {/* <img src={event.image} alt="Event Image" className="event-card-image" />
        <div className="event-card-content">
          <h2>{event.title}</h2>
          <p>Age requirements: {event.ageRequirements}</p>
          <p>Date: {event.date}</p>
        </div> */}
      </div>
    </div>
  )
}

export default Event
