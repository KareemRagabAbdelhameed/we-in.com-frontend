import { NavLink } from 'react-router-dom'

const NavLinks = ({isMobile = false}) => {
  return (
    <ul className={`${isMobile ? "flex flex-col items-center space-y-4 z-30" : "hidden md:flex space-x-6"} font-medium`}>
        <li>
          <NavLink to="/">
          {({isActive})=>(
            <span className={isActive ? "text-green-600" : "text-gray-900 hover:text-green-600"}>Home</span>
          )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
          {({isActive})=>(
            <span className={isActive ? "text-green-600" : "text-gray-900 hover:text-green-600"}>Explore</span>
          )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
          {({isActive})=>(
            <span className={isActive ? "text-green-600" : "text-gray-900 hover:text-green-600"}>Profile</span>
          )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/create">
          {({isActive})=>(
            <span className={isActive ? "text-green-600" : "text-gray-900 hover:text-green-600"}>Create</span>
          )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/earnings">
          {({isActive})=>(
            <span className={isActive ? "text-green-600" : "text-gray-900 hover:text-green-600"}>Earnings</span>
          )}
          </NavLink>
        </li>
      </ul>
  )
}

export default NavLinks
