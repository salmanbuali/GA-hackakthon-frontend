import axios from 'axios'
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Rides = () => {
  const [rides, setRides] = useState([])
  const [toggle, setToggle] = useState(false)

  const deleteRide = async (ride) => {
    let response = await axios.delete(`https://ga-hackakthon-backend.fly.dev/rides/${ride}`)
    console.log(response)
    setToggle(!toggle)
  }

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get('https://ga-hackakthon-backend.fly.dev/rides')
      setRides(response.data)
    }
    getRides()
  }, [toggle])

  return (
    <div>
      <Link to="/AddRides" className="add-event-button">
        Add Ride
      </Link>
      <div className="cards">
        {rides.map((ride) => (
          <div className="card-container">
            <div className="card">
              <div className="img-content">
                <img className="Ride" src={ride.pic} />
              </div>
              <div className="content">
                <p className="heading">{ride.name}</p>
                <p className="ride-desc">{ride.desc}</p>
                <p>Capacity: {ride.capacity} people - Min Height: {ride.min_height}</p>
                <p>Price: BHD {ride.price}</p>
              </div>
            </div>
            <button
              className="delete-smthing-btn"
              onClick={() => {
                deleteRide(ride._id)
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rides
