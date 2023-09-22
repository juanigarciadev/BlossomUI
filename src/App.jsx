import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import ComponentsSection from './components/ComponentsSection/ComponentsSection'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<ComponentsSection />} />
          <Route path='/templates' element={<Home />} />
          <Route path='/docs' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
