import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

/* const [users, setUsers] = useState([])

useEffect(() => {
axios.get('http://localhost:3000/getUsers')
.then(users => setUsers(users.data))
.catch(err => console.log(err))
}, []) */

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

export default App;