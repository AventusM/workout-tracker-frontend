import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

// https://www.youtube.com/watch?v=Y0-qdp-XBJg
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.auth)
  return (
    <Route {...rest} render={
      (props) => {
        if (user) {
          return <Component {...props} />
        } else {
          return <Redirect to="/" />
        }
      }
    } />
  )
}

export { ProtectedRoute }