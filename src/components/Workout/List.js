import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const WorkoutList = () => {
  const { data, loaded } = useSelector(state => state.workouts)
  return (loaded &&
    <div className="workout_list_container">
      {data.map(workout =>
        <SingleWorkout
          key={workout._id}
          results={workout.results}
          createdAt={workout.createdAt}
        />
      )}
    </div>
  )
}

const SingleWorkout = (props) => {
  const [visible, setVisible] = useState(false)
  const { results, createdAt } = props

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const dateData = new Date(createdAt)
  return (
    <div className="single_workout_and_toggle_component_container">
      <WorkoutToggle toggleVisibility={toggleVisibility} visible={visible} dateData={dateData} />
      {visible &&
        <ul className="single_workout_container">
          {results.map(result =>
            <SingleWorkoutResults
              key={result._id}
              name={result.name}
              type={result.type}
              weight={result.weight}
              repetitions={result.repetitions}
              sets={result.sets}
            />
          )}
        </ul>}
    </div>
  )
}

const WorkoutToggle = (props) => {
  const { toggleVisibility, visible, dateData } = props

  const dateOfMonth = dateData.getUTCDate()
  const month = dateData.getMonth()
  const year = dateData.getFullYear()

  return (
    <div className="workout_list_toggle_container" onClick={() => toggleVisibility()}>
      <p>
        {dateOfMonth}.{month} {year}
      </p>
      <FontAwesomeIcon
        icon={visible ? faAngleUp : faAngleDown}
        size="lg" />
    </div>
  )
}

const SingleWorkoutResults = (props) => {
  const { name, type, weight, repetitions, sets } = props
  return (
    <li className="single_workout_item">
      <b>{name}</b>
      <b>{type}</b>
    </li>
  )
}

const SingleWorkoutResultsCondensed = (props) => {
  const { name, type, sets } = props
  console.log('sets data', sets)
  return (
    <li className="form_single_result">
      <div className="form_single_result_name_type_container">
        <b>{name}</b>
        <b>{type}</b>
        <ul>
          {sets.map((set, index) => (
            <WorkoutSet
              key={index}
              weight={set.weight}
              repetitions={set.repetitions}
            />
          ))}
        </ul>
      </div>
    </li>
  )
}

const WorkoutSet = (props) => {
  const { weight, repetitions } = props
  return (
    <li>
      <div>{weight} kg</div>
      <div>{repetitions} reps</div>
    </li>
  )
}

export { WorkoutList, SingleWorkoutResultsCondensed }