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
import AvatarDocumentation from './components/Docs/ComponentsDoc/Avatar/AvatarDocumentation'
import BannerDocumentation from './components/Docs/ComponentsDoc/Banner/Banner'
import PaginationDocumentation from './components/Docs/ComponentsDoc/Pagination/Pagination'
import JumbotronDocumentation from './components/Docs/ComponentsDoc/Jumbotron/JumbotronDocumentation'
import KBDDocumentation from './components/Docs/ComponentsDoc/KBD/KBDDocumentation'
import AlertsDocumentation from './components/Docs/ComponentsDoc/Alerts/AlertsDocumentation'
import FooterDocumentation from './components/Docs/ComponentsDoc/Footer/Footer'
import FormsDocumentation from './components/Docs/ComponentsDoc/Forms/Forms'
import ModalDocumentation from './components/Docs/ComponentsDoc/Modal/Modal'
import RatingDocumentation from './components/Docs/ComponentsDoc/Rating/RatingDocumentation'
import SkeletonDocumentation from './components/Docs/ComponentsDoc/Skeleton/Skeleton'
import StepperDocumentation from './components/Docs/ComponentsDoc/Stepper/Stepper'
import TimelineDocumentation from './components/Docs/ComponentsDoc/Timeline/Timeline'
import ComponentsSection from './components/ComponentsSection/ComponentsSection'
import DarkMode from './components/Docs/DarkMode'

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path='/' element={<Home />} />
            <Route path='/components' element={<ComponentsSection />} />
            <Route path='/docs/getting-started/introduction' element={<Introduction />} />
            <Route path='/docs/getting-started/installation' element={<Installation />} />
            <Route path='/docs/getting-started/changelog' element={<Changelog />} />
            <Route path='/docs/customization/dark-mode' element={<DarkMode />} />
            <Route path='/docs/customization/colors' element={<Colors />} />
            <Route path='/docs/components/avatar' element={<AvatarDocumentation />} />
            <Route path='/docs/components/buttons' element={<Buttons />} />
            <Route path='/docs/components/badges' element={<BadgesDocumentation />} />
            <Route path='/docs/components/banner' element={<BannerDocumentation />} />
            <Route path='/docs/components/spinners' element={<SpinnersDocumentation />} />
            <Route path='/docs/components/cards' element={<CardsDocumentation />} />
            <Route path='/docs/components/pagination' element={<PaginationDocumentation />} />
            <Route path='/docs/components/progress' element={<ProgressDocumentation />} />
            <Route path='/docs/components/jumbotron' element={<JumbotronDocumentation />} />
            <Route path='/docs/components/kbd' element={<KBDDocumentation />} />
            <Route path='/docs/components/alerts' element={<AlertsDocumentation />} />
            <Route path='/docs/components/footer' element={<FooterDocumentation />} />
            <Route path='/docs/components/forms' element={<FormsDocumentation />} />
            <Route path='/docs/components/modal' element={<ModalDocumentation />} />
            <Route path='/docs/components/rating' element={<RatingDocumentation />} />
            <Route path='/docs/components/skeleton' element={<SkeletonDocumentation />} />
            <Route path='/docs/components/stepper' element={<StepperDocumentation />} />
            <Route path='/docs/components/toasts' element={<ToastsDocumentation />} />
            <Route path='/docs/components/timeline' element={<TimelineDocumentation />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
