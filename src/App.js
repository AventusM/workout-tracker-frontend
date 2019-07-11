import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './reducers/workouts'

const App = () => {
  const dispatch = useDispatch()

  // Should probably remain here
  useEffect(() => {
    dispatch(fetchData())
  }, [])


  return (
    <Fragment>
      NEXT -- REACT ROUTER
    </Fragment>
  )
}

export default App
