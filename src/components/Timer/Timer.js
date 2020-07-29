import React from 'react'
import './styles.css'

import NumberCard from '../NumberCard/NumberCard'

const Timer = (props) => {
  return (
    <div className="timer">
      <NumberCard
        type="MINUTES"
        value={props.minutesSettings}
        changed={props.changed}
        text={props.minutes}
        editable={props.isRunning}
      />
      <span>:</span>
      <NumberCard
        type="SECONDS"
        value={props.secondsSettings}
        changed={props.changed}
        text={props.seconds}
        editable={props.isRunning}
      />
    </div>
  )
}

export default Timer
