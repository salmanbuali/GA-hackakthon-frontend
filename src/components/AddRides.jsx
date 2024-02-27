import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'

const AddRides = () => {
  const initialState = {
    name: '',
    pic: '',
    desc: '',
    min_height: '',
    price: '',
    capacity: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post('http://localhost:3001/rides/', formState)
    console.log(response)
    setFormState(initialState)
  }

  return (
    <div className="add-event">
      <h2>Add Ride</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={formState.name}
          id='name'
          onChange={handleChange}
        />
        <label>Image URL:</label>
        <input
          type="text"
          id='pic'
          value={formState.pic}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          type="text"
          id='desc'
          value={formState.desc}
          onChange={handleChange}
        />
        <label>Minimum Height:</label>
        <input
          type="text"
          id='min_height'
          value={formState.min_height}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input type="number" value={formState.price} id='price' onChange={handleChange} />
        <label>Capacity</label>
        <input type="number" value={formState.capacity} id='capacity' onChange={handleChange}/>
        <button type="submit">Add Ride</button>
      </form>
    </div>
  )
}

export default AddRides
