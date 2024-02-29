import { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Event = () => {
  const [events, setEvents] = useState([])
  const [toggle, setToggle] = useState(false)


  const deleteEv = async (ev) => {
    let response = await axios.delete(`https://ga-hackakthon-backend.fly.dev/events/${ev}`)
    console.log(response)
    setToggle(!toggle)
  }

  useEffect(() => {
    const getEvents = async () => {
      const response = await axios.get('https://ga-hackakthon-backend.fly.dev/events')
      setEvents(response.data)
    }
    getEvents()
  },[toggle])
  return (
    <div>
      <Link to="/AddEvent" className="add-event-button">
        Add Event
      </Link>
      <div className='event-cards-container'>
      {events.map((event) => (
        <div className="event-card">
          <img src={event.pic} alt="Event Image" className="event-card-image" />
          <div className="event-card-content">
            <h2>{event.name}</h2>
            <p>Age requirements: {event.age_group}</p>
            <p>Date: {event.date_time}</p>
            <p>Location: {event.location}</p>
            <button className='delete-smthing-btn-event'
              onClick={() => {
                deleteEv(event._id)
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Event
