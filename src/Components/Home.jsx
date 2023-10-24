import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import Row from '..//Components/Row'
import axios from 'axios'

// https://api.themoviedb.org/3/movie/upcoming?api_key=22b96e40a32abbcc144f2eb9171f1ab7

const url = "https://api.themoviedb.org/3"
const apiKey = "22b96e40a32abbcc144f2eb9171f1ab7"
const Popular = "popular"
const Upcoming = "upcoming"
const TopRated = "top_rated"
const NowPlaying = "now_playing"

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const [ucomingMovies, setUpcomingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [NowPlayingMovies, setNowPlayingMovies] = useState([])

  const fetchPopular = async () => {
    try {
      const { data: { results } } = await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`)
      setPopularMovies(results)
    }
    catch (error) {
      console.log(error)
    }
  }

  const fetchupcoming = async () => {
    try {
      const { data: { results } } = await axios.get(`${url}/movie/${Upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results)
    }
    catch (error) {
      console.log(error)
    }
  }

  const fetchtopRated = async () => {
    try {
      const { data: { results } } = await axios.get(`${url}/movie/${TopRated}?api_key=${apiKey}`)
      setTopRatedMovies(results)
    }
    catch (error) {
      console.log(error)
    }
  }

  const fetchNowPlaying = async () => {
    try {
      const { data: { results } } = await axios.get(`${url}/movie/${NowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(results)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    fetchPopular()
    fetchupcoming()
    fetchtopRated()
    fetchNowPlaying()

  }, [])


  return (

    <section id="home">
      <div className="home_content">
        <h1 className="home_heading">MARVEL AVENGERS</h1>
        <p className="home_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam maxime? Excepturi repellat nihil quaerat. Lorem ipsum dolor  </p>
        <div className="buttons">
          <button className="btn">Play</button>
          <button className="btn btn1">My List</button>
        </div>

        <Row tittle="Popular on Netflix" arr={popularMovies} />
        <Row tittle="Upcoming" arr={ucomingMovies} />
        <Row tittle="Top Rated" arr={topRatedMovies} />
        <Row tittle="Now Playing" arr={NowPlayingMovies} />
      </div>

    </section>

  )
}

export default Home