import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkouts } from './reducers/workouts'
import { setUser } from './reducers/auth'

// SHOULD BE CHANGED TO GET JUST ONE
// SHOULD BE CHANGED TO GET JUST ONE
import { fetchQuotes } from './reducers/quotes'
// SHOULD BE CHANGED TO GET JUST ONE
// SHOULD BE CHANGED TO GET JUST ONE
import { WorkoutCreator } from './components/Workout/Index'
import { WorkoutList } from './components/Workout/List'
import { NavBar } from './components/Navbar/Navbar'
import { NonAuthIndex } from './components/Index/NonAuthIndex'
import { AuthIndex } from './components/Index/AuthIndex'
import { LoginIndex } from './components/Auth/Login'
import { RegisterIndex } from './components/Auth/Register'

const App = () => {
  const dispatch = useDispatch()
  const { logged_in, user, loading_user } = useSelector(state => state.auth)
  const { loading_workouts } = useSelector(state => state.workouts)
  // Should probably remain here
  useEffect(() => {
    dispatch(fetchWorkouts())
    dispatch(fetchQuotes())
    dispatch(setUser())
  }, [])

  useEffect(() => {
    dispatch(setUser())
  }, [logged_in])


  if (loading_user || loading_workouts) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Route exact path="/" component={user ? AuthIndex : NonAuthIndex} />
        <Route exact path="/login" component={LoginIndex} />
        <Route exact path="/register" component={RegisterIndex} />

        {/* Routes below should be private routes. Check with redux auth situation to determine whether redirect is needed to non auth routes */}
        <Route exact path="/create" component={WorkoutCreator} />
        <Route exact path="/workouts" component={WorkoutList} />
      </div>
    </Router>
  )
}

export default App
