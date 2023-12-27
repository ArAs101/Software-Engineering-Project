import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}