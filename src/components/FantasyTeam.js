import React from 'react'
import Staricon from './Staricon'
import Colors from './Colors'

const Fantasy = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.logo} alt="logo" className="card-logo" />
        <h2 className="card-title">{props.name}</h2>
      </div>
      <div className="card-bottom">
        <p className="card-details">{props.overview}</p>
        <a href={props.link} target="_blank" rel="noreferrer">
          <Colors color={props.colors[0].name} />
        </a>
        <Staricon />
      </div>
    </div>
  )
}

export default Fantasy
