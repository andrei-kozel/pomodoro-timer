import React from 'react'
import { FiSettings } from 'react-icons/fi'
import './styles.css'

const SettingsButton = (props) => {
  return (
    <div className="settings-btn-container">
      <FiSettings className="settings-btn" onClick={props.openSettings} />
    </div>
  )
}

export default SettingsButton
