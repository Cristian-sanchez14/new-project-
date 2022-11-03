import React from 'react'

const Colors = (props) => {
  let colorVariable
  switch (props.color) {
    case 'arsenal':
      colorVariable = 'red'
      break
    case 'aston villa':
      colorVariable = 'LightSkyBlue'
      break
    case 'bournemouth':
      colorVariable = 'firebrick'
      break
    case 'brentford':
      colorVariable = 'red'
      break
    case 'brighton':
      colorVariable = 'blue'
      break
    case 'chelsea':
      colorVariable = 'darkblue'
      break
    case 'crystal':
      colorVariable = 'lightblue'
      break
    case 'everton':
      colorVariable = 'blue'
      break
    case 'fulham':
      colorVariable = 'black'
      break
    case 'leeds':
      colorVariable = 'yellow'
      break
    case 'leicester':
      colorVariable = 'lightblue'
      break
    case 'liverpool':
      colorVariable = 'darkred'
      break
    case 'manchester city':
      colorVariable = 'lightblue'
      break
    case 'manchester united':
      colorVariable = 'orangered'
      break
    case 'newcastle':
      colorVariable = 'black'
      break
    case 'nottingham':
      colorVariable = 'red'
      break
    case 'southampton':
      colorVariable = 'red'
      break
    case 'spurs':
      colorVariable = 'midnightblue'
      break
    case 'west ham':
      colorVariable = 'maroon'
      break
    case 'wolves':
      colorVariable = 'darkorange'
      break
    default:
      colorVariable = 'red'
  }

  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <button style={{ background: colorVariable }} className="card-btn">
        Website
      </button>
    </a>
  )
}

export default Colors
