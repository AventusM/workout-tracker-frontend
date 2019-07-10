import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './reducers/workouts'

const App = (props) => {
  const { workouts } = props

  useEffect(() => {
    props.fetchWorkoutData()
  }, [])

  console.log('workout reducer state', workouts)
  return (
    <Fragment>
      WORKOUT TRACKER
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkoutData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
