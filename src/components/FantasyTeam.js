import React from 'react'

const Fantasy = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.logo} alt="logo" className="card-logo" />
        <h2 className="card-title">{props.name}</h2>
      </div>
      <div className="card-bottom">
        <button className="about-btn">
          <details>
            <summary>About</summary>
            <p className="card-details">{props.overview}</p>
          </details>
        </button>
      </div>
    </div>
  )
}

export default Fantasy
