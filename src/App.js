import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchWorkouts } from './reducers/workouts'

// SHOULD BE CHANGED TO GET JUST ONE
// SHOULD BE CHANGED TO GET JUST ONE
import { fetchQuotes } from './reducers/quotes'
// SHOULD BE CHANGED TO GET JUST ONE
// SHOULD BE CHANGED TO GET JUST ONE
import { WorkoutCreator } from './components/Workout/Index'
import { WorkoutList } from './components/Workout/List'
import { NavBar } from './components/Navbar/Navbar'
import { NonAuthIndex } from './components/Index/NonAuthIndex'

const App = () => {
  const dispatch = useDispatch()

  // Should probably remain here
  useEffect(() => {
    dispatch(fetchWorkouts())
    dispatch(fetchQuotes())
  }, [])

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Route exact path="/" component={NonAuthIndex} />
        <Route exact path="/create" component={WorkoutCreator} />
        <Route exact path="/workouts" component={WorkoutList} />
      </div>
    </Router>
  )
}

export default App
