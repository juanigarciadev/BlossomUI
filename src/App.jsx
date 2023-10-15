import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Introduction from './components/Docs/Introduction'
import Installation from './components/Docs/Installation'
import ThemeContextProvider from './context/ThemeContext'
import Changelog from './components/Docs/Changelog'
import Buttons from './components/Docs/ComponentsDoc/Buttons/ButtonsDocumentation'
import BadgesDocumentation from './components/Docs/ComponentsDoc/Badges/BadgesDocumentation'
import SpinnersDocumentation from './components/Docs/ComponentsDoc/Spinners/SpinnersDocumentation'
import CardsDocumentation from './components/Docs/ComponentsDoc/Cards/CardsDocumentation'
import ProgressDocumentation from './components/Docs/ComponentsDoc/Progress/ProgressDocumentation'
import ToastsDocumentation from './components/Docs/ComponentsDoc/Toasts/ToastsDocumentation'
import Colors from './components/Docs/Customization/Colors/Colors'



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
            <Route path='/docs/customization/colors' element={<Colors />} />
            <Route path='/docs/components/buttons' element={<Buttons />} />
            <Route path='/docs/components/badges' element={<BadgesDocumentation />} />
            <Route path='/docs/components/spinners' element={<SpinnersDocumentation />} />
            <Route path='/docs/components/cards' element={<CardsDocumentation />} />
            <Route path='/docs/components/progress' element={<ProgressDocumentation />} />
            <Route path='/docs/components/toasts' element={<ToastsDocumentation />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
