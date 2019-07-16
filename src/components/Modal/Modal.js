import React from 'react'
import { useDispatch } from 'react-redux'
import { closeWorkoutModal } from '../../reducers/modal'


const WorkoutSetModal = () => {
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(closeWorkoutModal())} className="modal">
      WORKOUT MODAL FOR INDIVIDUAL SET
    </div>
  )
}

export { WorkoutSetModal }