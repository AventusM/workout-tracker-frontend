import React, { Fragment } from 'react'
import { Quote } from '../Quote/Quote'
import { Register } from '../Auth/Register'
import { Login } from '../Auth/Login'

const NonAuthIndex = () => {
  return (
    <Fragment>
      <Quote />
      <NonAuthButtons />
    </Fragment>
  )
}

const NonAuthButtons = () => {
  return (
    <div className="non_auth_button_container">
      <Register />
      <Login />
    </div>
  )
}

export { NonAuthIndex }