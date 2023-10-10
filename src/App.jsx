import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Introduction from './components/Docs/Introduction'
import Installation from './components/Docs/Installation'
import ThemeContextProvider from './context/ThemeContext'
import Changelog from './components/Docs/Changelog'



function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path='/' element={<Home />} />
            <Route path='/docs/getting-started/introduction' element={<Introduction />} />
            <Route path='/docs/getting-started/installation' element={<Installation />} />
            <Route path='/docs/getting-started/changelog' element={<Changelog />} />
            <Route path='/docs/components/*' element={<Introduction />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
