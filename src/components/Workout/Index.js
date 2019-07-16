import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { WorkoutForm } from './Form'
import { WorkoutSetModal } from '../Modal/Modal'

const WorkoutCreator = () => {
  const { show } = useSelector(state => state.modal)

  return (
    <Fragment>
      <h1>Submit a workout</h1>
      <WorkoutForm />
      {/* Modal will move within WorkoutForm for setFieldResult to work */}
      {show && <WorkoutSetModal />}
    </Fragment>
  )
}

export { WorkoutCreator }