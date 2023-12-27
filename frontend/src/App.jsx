import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}