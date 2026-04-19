import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
     
     <Header />
     <main className="p-4">
       <h2 className="text-xl font-semibold mb-4">Welcome to My React App</h2>
       <p>This is a simple React application demonstrating routing and component structure.</p>
     </main>
     <Footer/>
    </>
  )
}

export default App
