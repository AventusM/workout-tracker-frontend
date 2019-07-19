import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/auth'

const LoginIndex = () => {
  return (
    <Fragment>
      <h1>Log into existing account</h1>
      <LoginForm />
    </Fragment>
  )
}

const LoginButton = () => {
  return (
    <Link className="button login_button" to="/login">Log in</Link>
  )
}

const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          const username = values.username
          const password = values.password
          dispatch(login({ username, password }))
        }}>
        {props =>
          <Form className="login_form" onSubmit={props.handleSubmit}>
            <Field name="username" type="text" onChange={props.handleChange} value={props.values.username} />
            <Field name="password" type="password" onChange={props.handleChange} value={props.values.password} />
            <button type="submit">Log in</button>
          </Form>
        }
      </Formik>
    </Fragment>
  )
}

export { LoginButton, LoginForm, LoginIndex }