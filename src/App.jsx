import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideMenu from './components/SideMenu/SideMenu'
import CustomersList from './pages/CustomersList/CustomersList'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import S from './App.module.css'

function App() {
  
  return (
    <div className={S.wholePage}>
   <BrowserRouter>
    {/* static */}
    <SideMenu/>
    <Routes>
    {/* dynamic */}
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/customers' element={<CustomersList/>}/>
    </Routes>
   </BrowserRouter> 
    </div>
  )
}

export default App
