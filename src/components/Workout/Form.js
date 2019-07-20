import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWorkout } from '../../reducers/workouts'
import { openWorkoutModal, closeWorkoutModal } from '../../reducers/modal'
import { SingleWorkoutResultsCondensed, WorkoutSetList } from './List'
import { Formik, FieldArray, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'


const WorkoutSetModal = (props) => {
  const { index, result, handleChange, setFieldValue } = props
  const { show } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const addSetToResult = () => {
    const updatedSets = result.sets.concat({ weight: result.weight, repetitions: result.repetitions })
    setFieldValue(`results[${index}].sets`, updatedSets)
    dispatch(closeWorkoutModal())
  }

  return (
    <Fragment>
      {!show && <button type="button" className="add_a_set_button" onClick={() => dispatch(openWorkoutModal())}>add a set</button>}
      {show &&
        <Fragment>
          <div className="workout_field_item_container">
            <label>Weight (kg)</label>
            <Field
              type="number"
              name={`results[${index}].weight`}
              value={result.weight}
              onChange={handleChange} />
          </div>

          <div className="workout_field_item_container">
            <label>Reps</label>
            <Field
              type="number"
              name={`results[${index}].repetitions`}
              value={result.repetitions}
              onChange={handleChange} />
          </div>
          <div className="confirm_or_cancel_set_addition_container">
            <button className="confirm_set_button" type="button" onClick={addSetToResult}>
              confirm
            </button>
            <button className="cancel_set_button" type="button" onClick={() => dispatch(closeWorkoutModal())}>
              cancel
            </button>
          </div>

        </Fragment>}
    </Fragment>
  )
}

// TODO -- CLEAR VALUES ON SUBMIT
// TODO -- CLEAR VALUES ON SUBMIT
// TODO -- CLEAR VALUES ON SUBMIT
const WorkoutForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik initialValues={{ results: [{ name: 'Bench press', type: 'Barbell', sets: [], weight: 0, repetitions: 0, visible: true }] }}
      onSubmit={(values) => {
        // THROW IN AN ALERT OF DATA TO BE SENT
        // THROW IN AN ALERT OF DATA TO BE SENT
        // THROW IN AN ALERT OF DATA TO BE SENT

        // MAP OUT VISIBILITY PROP
        const resultsWithoutUnneededProps = values.results.map(({ visible, weight, repetitions, ...rest }) => rest)
        dispatch(createWorkout({ results: resultsWithoutUnneededProps }))
      }}>

      {({ values, handleChange, setFieldValue }) => (
        <Form className="centered_form">
          <FieldArray name="results">{({ push, remove }) => (
            <div className="workout_field_and_button_container">
              {values.results.map((result, index) => {
                return (
                  <div className="workout_field_container" key={index}>
                    <div className="remove_and_hide_or_show_buttons_container">
                      <FontAwesomeIcon
                        onClick={() => remove(index)}
                        icon={faWindowClose}
                        size="lg" />
                      <FontAwesomeIcon
                        onClick={() => setFieldValue(`results[${index}].visible`, !result.visible)}
                        icon={result.visible ? faAngleUp : faAngleDown}
                        size="lg" />
                    </div>

                    {!result.visible
                      ? <Fragment>
                        <SingleWorkoutResultsCondensed
                          name={result.name}
                          type={result.type}
                          sets={result.sets}
                        />
                      </Fragment>
                      : <Fragment>
                        <div className="workout_field_item_container">
                          <label>Discipline</label>
                          <Field
                            component="select"
                            name={`results[${index}].name`}
                            value={result.name}
                            onChange={handleChange}>
                            <option disabled selected label=" ">-- select an option --</option>
                            <option value="Bench press">Bench press</option>
                            <option value="Military press">Military press</option>
                            <option value="Deadlift">Deadlift</option>
                            <option value="Squat">Squat</option>
                          </Field>
                        </div>

                        <div className="workout_field_item_container">
                          <label>Equipment type</label>
                          <Field
                            component="select"
                            name={`results[${index}].type`}
                            value={result.type}
                            onChange={handleChange}>
                            <option disabled selected label=" ">-- select an option --</option>
                            <option value="Barbell">Barbell</option>
                            <option value="Dumbbell">Dumbbell</option>
                            <option value="Machine">Machine</option>
                          </Field>
                        </div>

                        {/* LIST SETS HERE IN BETWEEN BUTTON AND OPTIONS */}
                        {/* RENDERED ONLY IF RESULT HAS ANY SETS. OTHERWISE TAKES SPACE */}
                        <WorkoutSetList sets={result.sets} />
                        {/* RENDERED ONLY IF RESULT HAS ANY SETS. OTHERWISE TAKES SPACE */}
                        {/* LIST SETS HERE IN BETWEEN BUTTON AND OPTIONS */}

                        <div className="workout_field_item_container">
                          <Field
                            name="sets"
                            index={index}
                            result={result}
                            handleChange={handleChange}
                            component={WorkoutSetModal}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fragment>
                    }
                  </div>
                )
              })}
              <button className="add_workout_to_list_button" type="button" onClick={() => push({ name: 'Bench press', type: 'Barbell', sets: [], weight: 0, repetitions: 0, visible: true })}>
                add result
                <FontAwesomeIcon icon={faPlusSquare} />
              </button>
            </div>
          )}
          </FieldArray>
          <button className="form_submit_button" type="submit">submit</button>
        </Form>
      )}
    </Formik >
  )
}

export { WorkoutForm }