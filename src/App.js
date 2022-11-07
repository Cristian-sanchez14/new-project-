import './App.css'
import data from './data.json'
import Teams from './components/Teams'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'
import Social from './components/Social'
import FantasyTeam from './components/FantasyTeam'

const App = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="App">
      <header className="App-header">Premier league</header>
      <Slider {...settings}>
        {data.teams.map((team, idx) => (
          <Teams
            key={idx}
            name={team.name.shotname}
            manager={team.manager}
            logo={team.name.logo}
            overview={team.overview}
            link={team.link}
            colors={team.colors}
          />
        ))}
      </Slider>
      <br></br>
      <br></br>
      <header className="App-header">Favorite Players</header>
      <Slider {...settings}>
        {data.fantasyteam.map((fantasy, idx) => (
          <FantasyTeam
            key={idx}
            name={fantasy.info.name}
            manager={fantasy.manager}
            logo={fantasy.info.picture}
            overview={fantasy.overview}
            link={fantasy.link}
            colors={fantasy.colors}
          />
        ))}
      </Slider>
      <br></br>
      <br></br>
      <br></br>
      <footer>
        <Social />
      </footer>
    </div>
  )
}

export default App
