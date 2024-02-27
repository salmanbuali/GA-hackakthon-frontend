import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img className="logo" src="Green Fun Carnival Theme Park Logo.png" />
        </div>
        <div className="link">
          <Link className="navBtn" to={"/"}>
            Home
          </Link>
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