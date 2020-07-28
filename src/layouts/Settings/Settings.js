import React from 'react'
import RangeSlider from '../../components/RangeSlider/RangeSlider'

const Settings = (props) => {
  return (
    <div>
      <h2>Settings</h2>
      <RangeSlider
        title="Work: "
        min="1"
        max="60"
        value={props.settings.minutes}
        type="MINUTES"
        changed={props.changed}
      />
      <RangeSlider
        title="Rest: "
        min="1"
        max="45"
        value={props.settings.restTime}
        type="REST"
        changed={props.changed}
      />
      <button onClick={props.close}>Ok</button>
    </div>
  )
}

export default Settings
