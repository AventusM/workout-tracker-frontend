import React from 'react'
import { useSelector } from 'react-redux'


const WorkoutSetModal = () => {
  const show = useSelector(state => state.modal)
  console.log('show status', show)
  return (show &&
    <div>
      WORKOUT MODAL FOR INDIVIDUAL SET
    </div>
  )
}

export { WorkoutSetModal }