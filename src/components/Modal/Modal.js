import React from 'react'
import './styles.css'

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">{props.children}</div>
    </div>
  )
}

export default Modal
