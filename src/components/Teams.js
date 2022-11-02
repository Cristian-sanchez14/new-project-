import React from 'react'
import Staricon from './Staricon'

export const Teams = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.logo} alt="logo" />
        </a>
        <h2 className="card-title">{props.name}</h2>
      </div>
      <div className="card-bottom">
        <p className="card-details">{props.overview}</p>
        <button className="card-btn">About</button>
        <Staricon />
      </div>
    </div>

    // <div className="wrapper">
    //   <img src={props.logo} alt="logo" />
    //   <h2 className="card-title">{props.name}</h2>
    //   <p className="card-details">{props.overview}</p>
    //   <button className="card-btn">Move</button>
    // </div>
  )
}

export default Teams
