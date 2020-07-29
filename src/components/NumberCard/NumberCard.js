import React, { useState } from 'react'
import './NumberCard.css'

const NumberCard = (props) => {
  const [editable, setEditable] = useState(false)

  const checkValidity = (value) => {
    if (value === '') {
      return '00'
    }
    if (value >= 60) {
      return '59'
    }
    return value
  }

  const changeInput = () => {
    setEditable(true)
  }

  const handleHideInput = (value) => {
    const checkedValue = checkValidity(value)
    props.changed(props.type, checkedValue)
    setEditable(false)
  }

  return (
    <div>
      {editable ? (
        <input
          className="input"
          value={props.value}
          onChange={(e) => props.changed(props.type, e.target.value)}
          onBlur={(e) => handleHideInput(e.target.value)}
          maxLength="2"
          autoFocus
        />
      ) : (
        <span onClick={!props.editable ? changeInput : null}>{props.text}</span>
      )}
    </div>
  )
}

export default NumberCard
