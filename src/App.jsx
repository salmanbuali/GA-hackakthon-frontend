import "./App.css"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Rides from "./components/Rides"
import Home from "./components/Home"
// import AddRides from "./components/AddRides"

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Rides/>
        {/* <AddRides /> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Rides" element={<Rides />} />
          {/* <Route path="/Events" element={<Events />} />
          <Route path="/AddRides" element={<AddRides />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
