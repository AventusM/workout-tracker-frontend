import React, { Fragment } from 'react'
import { Quote } from '../Quote/Quote'
import { RegisterButton } from '../Auth/Register'
import { LoginButton } from '../Auth/Login'

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
      <RegisterButton />
      <LoginButton />
    </div>
  )
}

export { NonAuthIndex }