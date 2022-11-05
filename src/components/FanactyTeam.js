import React from 'react'
import Staricon from './Staricon'

const Fanacty = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.logo} alt="logo" />
        <h2 className="card-title">{props.name}</h2>
      </div>
      <div className="card-bottom">
        <p className="card-details">{props.overview}</p>
        <Staricon />
      </div>
    </div>
  )
}

export default Fanacty
