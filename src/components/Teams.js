import React from 'react'

export const Teams = (props) => {
  return (
    <div>
      <img src={props.logo} alt="logo" />
      <h2>name: {props.name}</h2>
      <h2>manager: {props.manager}</h2>
    </div>
  )
}

export default Teams
