
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Movies from './Movies'
import MovieDetails from './MovieDetails'
import Favorite from './Favorites'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
