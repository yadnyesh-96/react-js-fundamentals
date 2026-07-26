import { Route, Routes } from 'react-router-dom'

import Layout from '../Header-&-Footer/Layout'

import Home from './components/Home'
import Input from './components/Input'
import Notes from './components/Notes'
import RegistrationForm from './components/RegistrationForm'
import FocusInput from './components/FocusInput'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/notes" element={<Notes />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/focusInput' element={<FocusInput />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
