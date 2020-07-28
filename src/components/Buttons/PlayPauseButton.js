import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

const PlayPauseButton = (props) => {
  let playPauseButton = (
    <button className="button" onClick={props.playButton}>
      <FaPlay className="icon" />
    </button>
  )

  if (props.isRunning) {
    playPauseButton = (
      <button className="button" onClick={props.pauseButton}>
        <FaPause className="icon" />
      </button>
    )
  }

  return <div className="button-container">{playPauseButton}</div>
}

export default PlayPauseButton
