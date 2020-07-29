import React from 'react'
import './styles.css'

const RangeSlider = (props) => {
  return (
    <div className="slide-container">
      <p className="title">{props.title}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        className="slider"
        onChange={(e) => props.changed(props.type, e.target.value)}
      />
      <p>{props.value} min</p>
    </div>
  )
}

export default RangeSlider
