
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movies from './Movies'
import MovieDetails from './MovieDetails'
import Favorite from './Favorites'
import Layout from './Layout'
import Card from './Card'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Layout>
    </>

  )
}

export default App
