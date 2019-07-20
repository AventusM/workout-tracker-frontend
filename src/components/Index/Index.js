import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AuthIndex } from './AuthIndex'
import { NonAuthIndex } from './NonAuthIndex'

const Index = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <Fragment>
      {user && <AuthIndex />}
      {!user && <NonAuthIndex />}
    </Fragment>
  )
}


export { Index }