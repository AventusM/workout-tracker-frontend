import { useState } from 'react'

const useField = (type) => {
  const [value, setValue] = useState('')
  
  const handleFieldChange = (event) => {
    setValue(event.target.value)
  }

  const changeValue = (value) => {
    setValue(value)
  }

  const reset = () => {
    setValue('')
  }

  return { type, value, handleFieldChange, reset, changeValue }
}

export default useField