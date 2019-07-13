import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from './reducers/workouts'
import { WorkoutForm, WorkoutList } from './components/Workout/Workout'
import { NavBar } from './components/Navbar/Navbar'
import { NonAuthIndex } from './components/Index/NonAuthIndex'

const App = () => {
  const dispatch = useDispatch()

  // Should probably remain here
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Route exact path="/" component={NonAuthIndex} />
        <Route exact path="/create" component={WorkoutForm} />
        <Route exact path="/workouts" component={WorkoutList} />
      </div>
    </Router>
  )
}

export default App
