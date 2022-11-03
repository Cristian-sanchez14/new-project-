import React from 'react'

const Colors = (props) => {
  let colorVariable
  switch (props.color) {
    case 'arsenal':
      colorVariable = 'red'
      break
    case 'aston villa':
      colorVariable = 'lightblue'
      break
    case 'bournemouth':
      colorVariable = 'red'
      break
    case 'brentford':
      colorVariable = 'lightred'
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
    case 'leeds':
      colorVariable = 'yellow'
      break
    case 'leicester':
      colorVariable = 'lightblue'
      break
    case 'liverpool':
      colorVariable = 'lightred'
      break
    case 'manchester city':
      colorVariable = 'lightblue'
      break
    case 'manchester united':
      colorVariable = ''
      break
    case 'newcastle':
      colorVariable = 'black'
      break
    case 'nottingham':
      colorVariable = 'lightred'
      break
    case 'southamer':
      colorVariable = ''
      break
    case 'spurs':
      colorVariable = 'CadetBlue'
      break
    case 'west ham':
      colorVariable = 'claret'
      break
    case 'wolves':
      colorVariable = 'yellow'
      break
    default:
      colorVariable = 'white'
  }

  return (
    // <div className="colors">
    //   <p style={{ backgroundColor: colorVariable }}>{props.names}</p>
    // </div>
    <a href={props.link} target="_blank" rel="noreferrer">
      <button style={{ background: colorVariable }} className="card-btn">
        Website
      </button>
    </a>
  )
}

export default Colors
