import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { LogoutButton } from '../Auth/Logout'

const AuthIndex = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <Fragment>
      <div>Hello {user.username}!</div>
      <div>Click button to log out!</div>
      <LogoutButton />
    </Fragment>
  )
}

export { AuthIndex }