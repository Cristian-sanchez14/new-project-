import './App.css'
import data from './data.json'
import Teams from './components/Teams'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Premier league</header>
      <div>
        {data.teams.map((team, idx) => (
          <Teams
            key={idx}
            name={team.name.shotname}
            manager={team.manager}
            logo={team.name.logo}
          />
        ))}
      </div>
    </div>
  )
}

export default App
