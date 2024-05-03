import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
    <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shortlisted" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </UserProvider>
  )
}

export default App
