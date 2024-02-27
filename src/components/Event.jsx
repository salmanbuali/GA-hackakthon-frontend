import { useState, useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Event = () => {
  const [events, setEvents] = useState([])

  const deleteEv = async(ev) => {
    let response = await axios.delete(`http://localhost:3001/events/${ev}`)
    console.log(response)
  }

  useEffect(() => {
    const getEvents = async () => {
      const response = await axios.get('http://localhost:3001/events')
      setEvents(response.data)
    }
    getEvents()
  }, [events])
  return (
    <div>
      <Link to="/AddEvent" className="add-event-button">
        Add Event
      </Link>
      
        {events.map((event)=>(
          <div className="event-card">
            <img src={event.pic} alt="Event Image" className="event-card-image" />
            <div className="event-card-content">
              <h2>{event.name}</h2>
              <p>Age requirements: {event.age_group}</p>
              <p>Date: {event.date_time}</p>
              <p>Location: {event.location}</p>
              <button onClick={() => {deleteEv(event._id)}}>DELETE</button>
            </div> 
          </div>
        ))}
        
      
    </div>
  )
}

export default Event
