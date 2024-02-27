import React, { useState } from 'react'
import '../App.css'

const AddEvent = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [ageRequirements, setAgeRequirements] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !image || !ageRequirements || !date) {
      alert('Please fill in all fields')
      return
    }
    const newEvent = { title, image, ageRequirements, date }
    setTitle('')
    setImage('')
    setAgeRequirements('')
    setDate('')

    console.log(newEvent)
  }

  return (
    <div className="add-event">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Age Requirements:</label>
        <input
          type="text"
          value={ageRequirements}
          onChange={(e) => setAgeRequirements(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  )
}

export default AddEvent
