import axios from 'axios'
import { useState, useEffect} from 'react'
const Rides = () => {
  const [rides, setRides] = useState([])

  const deleteRide = async(ride) => {
    let response = await axios.delete(`http://localhost:3001/rides/${ride}`)
    console.log(response)
  }

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get('http://localhost:3001/rides')
      setRides(response.data)
    }
    getRides()
  }, [])

  return (
    <div className="cards">
      {
        rides.map((ride)=>(
          <div className="card-container">
        <div className="card">
          <div className="img-content">
            <img className="Ride" src={ride.pic} />
          </div>
          <div className="content">
            <p className="heading">{ride.name}</p>
            <p>
              {ride.desc}
            </p>
            <button onClick={() => {deleteEv(ride._id)}}>DELETE</button>
          </div>
        </div>
      </div>
        ))
      }
      
{/* 
      <div className="card-container">
        <div className="card">
          <div className="img-content">
            <img className="Ride" src="fair-540126_1280.jpg" />
          </div>
          <div className="content">
            <p className="heading">Jupiter</p>
            <p>
              Embark on the exhilarating journey of Jupiter, where
              gravity-defying twists and electrifying drops propel you through a cosmic
              adventure. Brace yourself for an otherworldly ride that sends thrill-seekers soaring through the galaxy at breathtaking speeds.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="img-content">
            <img className="Ride" src="cranger-fair-722819_1280.jpg" />
          </div>
          <div className="content">
            <p className="heading">Munchen</p>
            <p>
              Experience the exhilarating twists and turns of Munchen, where
              <br />
              gravity-defying loops and heart-pounding drops create a thrilling
              <br />
              symphony of adrenaline. Brace yourself for an unforgettable ride
              <br />
              through the pulse-pounding excitement of this <br />
              rollercoaster masterpiece.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Rides
