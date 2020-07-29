import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import './styles.css'

const PlayPauseButton = (props) => {
  let playPauseButton = (
    <button
      className={[
        'button',
        props.mode === 'session' ? 'button-red' : 'button-green'
      ].join(' ')}
      onClick={props.playButton}>
      <FaPlay className="icon" />
    </button>
  )

  if (props.isRunning) {
    playPauseButton = (
      <button
        className={[
          'button',
          props.mode === 'session' ? 'button-red' : 'button-green'
        ].join(' ')}
        onClick={props.pauseButton}>
        <FaPause className="icon" />
      </button>
    )
  }

  return (
    <div
      className={[
        'button-container',
        props.mode === 'session'
          ? 'button-container-red'
          : 'button-container-green'
      ].join(' ')}>
      {playPauseButton}
    </div>
  )
}

export default PlayPauseButton
