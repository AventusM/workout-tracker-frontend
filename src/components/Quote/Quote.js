import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Quote = () => {
  const { data, loaded } = useSelector(state => state.quotes)
  return (
    <Fragment>
      {!loaded && <Fragment>Loading...</Fragment>}
      {loaded && <h1 className="title_text_shadow">{data.quote} by {data.by}</h1>}
    </Fragment>
  )
}

export { Quote }