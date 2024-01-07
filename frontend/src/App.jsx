import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import GiftAway from './pages/Giftaway'
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
          <Route path="/" element={<Dashboard />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="giftaway" element={<GiftAway />}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}

export default App;