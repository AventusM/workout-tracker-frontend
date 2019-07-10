import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './reducers/workouts'

const App = () => {
  const workouts = useSelector(state => state.workouts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  console.log('workout reducer state', workouts)
  return (
    <Fragment>
      WORKOUT TRACKER
    </Fragment>
  )
}

export default App
