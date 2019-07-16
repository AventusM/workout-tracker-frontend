import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { createWorkout } from '../../reducers/workouts'
import { SingleWorkoutResultsCondensed } from './List'
import { Formik, FieldArray, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'


// TODO -- CLEAR VALUES ON SUBMIT
// TODO -- CLEAR VALUES ON SUBMIT
// TODO -- CLEAR VALUES ON SUBMIT
const WorkoutForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik initialValues={{ results: [{ name: 'Bench press', type: 'Barbell', weight: 0, repetitions: 0, sets: 0, visible: true }] }}
      onSubmit={(values) => {
        // THROW IN AN ALERT OF DATA TO BE SENT
        // THROW IN AN ALERT OF DATA TO BE SENT
        // THROW IN AN ALERT OF DATA TO BE SENT

        // MAP OUT VISIBILITY PROP
        const resultsWithoutVisibleProp = values.results.map(({ visible, ...rest }) => rest)
        dispatch(createWorkout({ results: resultsWithoutVisibleProp }))
      }}>

      {({ values, handleChange, setFieldValue }) => (
        <Form className="centered_form">
          <FieldArray name="results">{({ push, remove }) => (
            <div className="workout_field_and_button_container">
              {values.results.map((result, index) => {
                console.log('result info', result)
                return (
                  <div className="workout_field_container" key={index}>

                    {/* DONT SHOW IF RESULTS LENGTH 1 */}
                    {/* DONT SHOW IF RESULTS LENGTH 1 */}
                    {/* DONT SHOW IF RESULTS LENGTH 1 */}
                    {/* DONT SHOW IF RESULTS LENGTH 1 */}
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
                          weight={result.weight}
                          repetitions={result.repetitions}
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

                        <div className="workout_field_item_container">
                          <button type="button" onClick={() => console.log('SOMETHING WILL GET CHANGED HERE')}>ADD SET INFO</button>
                        </div>

                        {/* <div className="workout_field_item_container">
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

                        <div className="workout_field_item_container">
                          <label>Sets</label>
                          <Field
                            type="number"
                            name={`results[${index}].sets`}
                            value={result.sets}
                            onChange={handleChange} />
                        </div> */}
                      </Fragment>
                    }
                  </div>
                )
              })}

              {/* Push requires default values i guess... */}
              <button className="add_workout_to_list_button" type="button" onClick={() => push({ name: 'Bench press', type: 'Barbell', weight: 0, repetitions: 0, sets: 0, visible: true })}>
                add discipline
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