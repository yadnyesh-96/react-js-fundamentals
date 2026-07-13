import { Route, Routes } from 'react-router-dom'

import Layout from '../Header-&-Footer/Layout'

import Home from './components/Home'
import Input from './components/Input'
import Notes from './components/Notes'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
