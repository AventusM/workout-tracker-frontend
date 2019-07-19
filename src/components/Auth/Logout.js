import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/auth'

const LogoutButton = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(logout())}>
      Log out
    </button>
  )
}

export { LogoutButton }