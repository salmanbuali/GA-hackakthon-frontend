import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Rides from './components/Rides'
import Home from './components/Home'
import AddEvent from './components/AddEvent'
import Event from './components/Event'

const App = () => {
  return (
    <div>
      {/* <Event /> */}
      {/* <AddEvent /> */}

      <NavBar />
      <div>
        {/* <Rides /> */}
        {/* <AddRides /> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Rides" element={<Rides />} />
          <Route path="/Events" element={<Event />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          {/* <Route path="/AddRides" element={<AddRides />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
