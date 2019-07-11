import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWorkout, fetchData } from '../reducers/workouts'
import { Formik, FieldArray, Form, Field } from 'formik'


// TODO -- CLEAR VALUES ON SUBMIT
// TODO -- CLEAR VALUES ON SUBMIT
// TODO -- CLEAR VALUES ON SUBMIT
const WorkoutForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik initialValues={{ results: [{ name: 'Bench press', type: 'Barbell', weight: 0, repetitions: 0, sets: 0 }] }}
      onSubmit={(values) => { 
        dispatch(createWorkout({results: values.results})) 
        }}>

      {({ values, handleChange }) => (
        <Form>
          <FieldArray name="results">{({ push }) => (
            <Fragment>
              {values.results.map((result, index) => {
                return (
                  <Fragment key={index}>
                    <div>
                      <label>Choose discipline</label>
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

                    <div>
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

                    <div>
                      <label>Weight (kg)</label>
                      <Field
                        name={`results[${index}].weight`}
                        value={result.weight}
                        onChange={handleChange} />
                    </div>

                    <div>
                      <label>Reps</label>
                      <Field
                        name={`results[${index}].repetitions`}
                        value={result.repetitions}
                        onChange={handleChange} />
                    </div>

                    <div>
                      <label>Sets</label>
                      <Field
                        name={`results[${index}].sets`}
                        value={result.sets}
                        onChange={handleChange} />
                    </div>
                  </Fragment>
                )
              })}

              {/* Push requires default values i guess... */}
              <button type="button" onClick={() => push({ name: 'Bench press', type: 'Barbell', weight: 0, repetitions: 0, sets: 0 })}>add to list</button>
            </Fragment>
          )}
          </FieldArray>
          <button type="submit">submit</button>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      )}
    </Formik>
  )
}

const WorkoutList = () => {
  const workouts = useSelector(state => state.workouts)
  return (
    <Fragment>LIST</Fragment>
  )
}

const WorkoutItem = (props) => {
  return (
    <Fragment>ITEM</Fragment>
  )
}

export { WorkoutForm, WorkoutItem, WorkoutList }