import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
        <Link className="navBtn" to={"/"}>
          <img className="logo" src="SALLY LAND.png" />
        </Link> 
        </div>
        <div className="link">
          <Link  to={"/Rides"}>
            Rides
          </Link>
          <Link  to={"/Events"}>
            Events
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
