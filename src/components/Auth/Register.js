import React, { Fragment } from 'react'
import { Formik, FieldArray, Form, Field } from 'formik'
import { Link } from 'react-router-dom'

const RegisterButton = () => {
  return (
    <Link className="button register_button" to="/register">Join</Link>
  )
}

const RegisterIndex = () => {
  return (
    <Fragment>
      <h1>Register a new user</h1>
      <RegisterForm />
    </Fragment>
  )
}


const RegisterForm = () => {
  return (
    <Fragment>
      <Formik
        initialValues={{ username: '', password: '', confirmPassword: '' }}
        onSubmit={() => console.log('submit button pressed!')}>
        {props =>
          <Form className="login_form" onSubmit={props.handleSubmit}>
            <Field name="username" type="text" onChange={props.handleChange} value={props.values.username} />
            <Field name="password" type="password" onChange={props.handleChange} value={props.values.password} />
            <Field name="password" type="password" onChange={props.handleChange} value={props.values.confirmPassword} />
            <button type="submit">Register</button>
          </Form>
        }
      </Formik>
    </Fragment>
  )
}

export { RegisterButton, RegisterForm, RegisterIndex }