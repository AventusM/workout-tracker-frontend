import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWorkout, fetchData } from '../reducers/workouts'


// 2 parts
// 1st -- add items (results) to be submitted later
// 2nd -- submit the whole thing
const WorkoutForm = () => {
  const dispatch = useDispatch()

  const submitWorkout = (event) => {
    event.preventDefault()
    try {
      dispatch(createWorkout())
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <form onSubmit={submitWorkout}>
      FORM
      <button type="submit">SUBMIT A WORKOUT</button>
    </form>
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