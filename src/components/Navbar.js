import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/create">create a workout</Link>
      </li>
      <li>
        <Link to="/workouts">workouts</Link>
      </li>
    </ul>
  )
}

export { NavBar }