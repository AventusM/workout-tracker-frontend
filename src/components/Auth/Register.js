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
        initialValues={{ username: '', password: '', passwordDuplicate: '' }}
        onSubmit={() => console.log('submit button pressed!')}>
        {props =>
          <Form className="auth_form" onSubmit={props.handleSubmit}>
            <section className="auth_form_field_container">
              <label>Username</label>
              <Field name="username" type="text" onChange={props.handleChange} value={props.values.username} />
            </section>
            <section className="auth_form_field_container">
              <label>Password</label>
              <Field name="password" type="password" onChange={props.handleChange} value={props.values.password} />
            </section>
            <section className="auth_form_field_container">
              <label>Password again</label>
              <Field name="password" type="password" onChange={props.handleChange} value={props.values.passwordDuplicate} />
            </section>
            <button type="submit">Register</button>
          </Form>
        }
      </Formik>
    </Fragment>
  )
}

export { RegisterButton, RegisterForm, RegisterIndex }