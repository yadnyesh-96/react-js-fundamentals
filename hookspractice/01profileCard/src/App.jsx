import { useState } from 'react'
import reactSvg from './assets/react.svg';
import './App.css'
import MyCard from './components/MyCard.jsx';

function App() {


  return (
    <>
      <MyCard
      name="yadnyesh"
      role="RPA Developer"
      img={reactSvg}/>

    </>
  )
}

export default App
