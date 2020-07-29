import React from 'react'
import './styles.css'

import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show-={props.show} close={props.close} />
      <div className="modal-container">
        <div className="modal">{props.children}</div>
      </div>
    </React.Fragment>
  )
}

export default Modal
