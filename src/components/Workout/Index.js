import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { WorkoutForm } from './Form'
import { WorkoutSetModal } from '../Modal/Modal'

const WorkoutCreator = () => {
  return (
    <Fragment>
      <h1 className="title_text_shadow centered_text">Submit a workout</h1>
      <WorkoutForm />
    </Fragment>
  )
}

export { WorkoutCreator }