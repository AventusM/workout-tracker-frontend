import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from './reducers/workouts'
import { WorkoutForm, WorkoutList } from './components/Workout'

const NavBar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/create">create a workout</Link>
      </li>
      <li>
        <Link to="/workouts">workouts</Link>
      </li>
    </ul>
  )
}

const App = () => {
  const dispatch = useDispatch()

  // Should probably remain here
  useEffect(() => {
    dispatch(fetchData())
  }, [])


  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/create" component={WorkoutForm} />
        <Route exact path="/workouts" component={WorkoutList} />
      </Fragment>
    </Router>
  )
}

export default App
