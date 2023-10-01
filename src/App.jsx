import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Introduction from './components/Docs/Introduction'
import Installation from './components/Docs/Installation'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path='/' element={<Home />} />
          <Route path='/docs/getting-started/introduction' element={<Introduction />} />
          <Route path='/docs/getting-started/installation' element={<Installation />} />
          <Route path='/docs/components/*' element={<Introduction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
