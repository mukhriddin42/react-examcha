import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './pages/Content'
import OneUser from './pages/OneUser'
import Login from './auth/Login'
import Register from './auth/Register'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/content' element={<Content/>}/>
        <Route path='/oneuser/:id' element={<OneUser/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/register/' element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
