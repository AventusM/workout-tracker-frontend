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
        <UserButtons />
      </li>

      <li>
        <Title title={'about workout tracker'} />
      </li>

    </ul>
  )
}

const Title = (props) => {
  const { title, className } = props
  return (
    <div className={className}>
      {title}
    </div >
  )
}

// Put fixed width to this div
const UserButtons = (props) => {
  const { className } = props
  return (
    <ul className={className}>
      SOCIALS
    </ul >
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
          <Title title={'WORKOUT TRACKER'} className="navbar_title_desktop" />
          <UserButtons className="navbar_actions_desktop" />
        </Fragment>
        : null}
    </nav >
  )
}

export { NavBar }