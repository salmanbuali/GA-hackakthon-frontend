import "./App.css"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Rides from "./components/Rides"
import Home from "./components/Home"
import AddRides from "./components/AddRides"
import AddEvent from "./components/AddEvent"
import Event from './components/Event'


const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Rides" element={<Rides />} />
          <Route path="/Events" element={<Event />} />
          <Route path="/AddRides" element={<AddRides />} />
          <Route path="/AddEvent" element={<AddEvent />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
