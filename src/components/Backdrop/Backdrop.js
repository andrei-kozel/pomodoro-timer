import React from 'react'
import './styles.css'

const Backdrop = (props) =>
  !props.show ? <div className="backdrop" onClick={props.close}></div> : null

export default Backdrop
