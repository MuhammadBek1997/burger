import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Order from './pages/Order'
import Menu from './pages/Menu'
import NewMenu from './pages/NewMenu'

function App() {
  const navigate = useNavigate()
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home navigate={navigate}/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/newmenu' element={<NewMenu/>} />
        
      </Routes>

    </>
  )
}

export default App
