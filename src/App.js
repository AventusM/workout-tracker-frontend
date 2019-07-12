import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './reducers/workouts'
import { WorkoutForm, WorkoutList } from './components/Workout'

const App = () => {
  const dispatch = useDispatch()

  // Should probably remain here
  useEffect(() => {
    dispatch(fetchData())
  }, [])


  return (
    <Fragment>
      <WorkoutForm />
      <WorkoutList />
      NEXT -- REACT ROUTER
    </Fragment>
  )
}

export default App
