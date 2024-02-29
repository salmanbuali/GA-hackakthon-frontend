import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddEvent = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    location: '',
    date_time: '',
    age_group: '',
    pic: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post('https://ga-hackakthon-backend.fly.dev/events/', formState)
    console.log(response)
    setFormState(initialState)
    navigate('/Events')
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="add-event">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={formState.name}
          onChange={handleChange}
          id='name'
        />
        <label>Image URL:</label>
        <input
          type="text"
          value={formState.pic}
          onChange={handleChange}
          id='pic'
        />
        <label>Age Group:</label>
        <input
          type="text"
          value={formState.age_group}
          onChange={handleChange}
          id='age_group'
        />
        <label>Date and Time:</label>
        <input
          type="text"
          value={formState.date_time}
          onChange={handleChange}
          id='date_time'
        />
        <label>Location:</label>
        <input
          type="text"
          value={formState.location}
          onChange={handleChange}
          id='location'
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  )
}

export default AddEvent
