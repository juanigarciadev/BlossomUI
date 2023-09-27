import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Docs from './components/Docs/Docs'
import NavbarContainer from './components/Navbar/NavbarContainer'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path='/' element={<Home />} />
          <Route path='/docs/getting-started/introduction' element={<Docs />} />
          <Route path='/docs/components/*' element={<Docs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
