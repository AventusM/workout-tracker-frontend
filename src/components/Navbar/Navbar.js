import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  const { menuStatus, changeMenuStatus } = props
  return (
    <Fragment >
      {menuStatus && <NavLinks changeMenuStatus={changeMenuStatus} />}
      {!menuStatus && <Hamburger changeMenuStatus={changeMenuStatus} />}
    </Fragment>
  )
}

// Put fixed width to this div
const Hamburger = (props) => {
  const { changeMenuStatus } = props
  return (
    <div onClick={changeMenuStatus}>
      MENU
    </div>
  )
}

const NavLinks = (props) => {
  const { changeMenuStatus } = props
  return (
    <ul onClick={changeMenuStatus} className="navbar_links">

      <li>
        <Link to="/create">create a workout</Link>
      </li>

      <li>
        <Link to="/workouts">workouts</Link>
      </li>

      <li>
        <Title />
      </li>

      <li>
        <UserButtons />
      </li>

    </ul>
  )
}

const Title = () => {
  return (
    <div className="navbar_title">
      WORKOUT TRACKER
    </div>
  )
}

// Put fixed width to this div
const UserButtons = () => {
  return (
    <ul className="navbar_join_links">
      SOCIALS
    </ul>
  )
}

// BE VERY CAREFUL WITH FLEX SPACE BETWEEN
// SET WIDTHS SO TITLE WILL BE ACTUALLY CENTERED INSTEAD
// OF BEING OFFSET
const NavBar = (props) => {
  const [menuStatus, changeMenuStatus] = useState(false)

  const toggleMenu = () => {
    changeMenuStatus(!menuStatus)
  }

  return (
    <nav>
      <Menu changeMenuStatus={toggleMenu} menuStatus={menuStatus} />
      {menuStatus === false ?
        <Fragment>
          <Title />
          <UserButtons />
        </Fragment>
        : null}
    </nav >
  )
}

export { NavBar }