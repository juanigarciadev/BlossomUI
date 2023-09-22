import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
