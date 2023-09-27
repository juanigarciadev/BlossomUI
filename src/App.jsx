import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Docs from './components/Docs/Docs'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/docs/getting-started' element={<Docs />} />
          <Route path='/docs/components/*' element={<Docs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
