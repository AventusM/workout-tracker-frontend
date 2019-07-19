import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducers/auth'

const LoginIndex = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <Fragment>
      {/* This seems to be the way to redirect to index if user has been set */}
      {user && <Redirect to="/" />}
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
            <section>
              <label>Username</label>
              <Field name="username" type="text" onChange={props.handleChange} value={props.values.username} />
            </section>
            <section>
              <label>Password</label>
              <Field name="password" type="password" onChange={props.handleChange} value={props.values.password} />
            </section>
            <button type="submit">Log in</button>
          </Form>
        }
      </Formik>
    </Fragment>
  )
}

export { LoginButton, LoginForm, LoginIndex }