import './App.css'
import data from './data.json'
import Teams from './components/Teams'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'
import Social from './components/Social'

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
    <div>
      <header className="App-header">
        <img
          src="https://yt3.ggpht.com/_ReZkZsEOwJYajNodeVsGUo6ZtzVrd_1N3kceVAYnaYvoBkG1Emjf2GJn-gSbL0Rs3gGoCUOnjM=s900-c-k-c0x00ffffff-no-rj"
          className="logo"
        />
        Premier league
      </header>
      <Slider {...settings} className="App">
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
      <br></br>
      <div>
        <Social />
      </div>
    </div>
  )
}

export default App
