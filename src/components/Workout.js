import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWorkout, fetchData } from '../reducers/workouts'
import { Formik, FieldArray, Form } from 'formik'


// 2 parts
// 1st -- add items (results) to be submitted later
// 2nd -- submit the whole thing
const WorkoutForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik initialValues={{ results: [] }} onSubmit={() => { }}>
      {({ values }) => (
        <Form>
          <input />
          <FieldArray name="results">{({ push }) => (
            <div>
              <button type="button" onClick={() => push()}>add to list</button>
            </div>
          )}
          </FieldArray>
          <button type="submit">submit</button>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      )}
    </Formik>
  )
}

const WorkoutList = () => {
  const workouts = useSelector(state => state.workouts)
  return (
    <Fragment>LIST</Fragment>
  )
}

const WorkoutItem = (props) => {
  return (
    <Fragment>ITEM</Fragment>
  )
}

export { WorkoutForm, WorkoutItem, WorkoutList }