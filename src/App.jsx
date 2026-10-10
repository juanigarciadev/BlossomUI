import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ThemeContextProvider from './context/ThemeContext'
import DocsLayout from './components/Docs/DocsLayout'
import RouteSeo from './components/Seo/RouteSeo'
import NotFound from './components/NotFound/NotFound'

// Every page is loaded on demand so the first visit only downloads what it shows.
const Home = lazy(() => import('./components/Home/Home'))
const ComponentsSection = lazy(() => import('./components/ComponentsSection/ComponentsSection'))
const Introduction = lazy(() => import('./components/Docs/Introduction'))
const Installation = lazy(() => import('./components/Docs/Installation'))
const Changelog = lazy(() => import('./components/Docs/Changelog'))
const DarkMode = lazy(() => import('./components/Docs/DarkMode'))
const Colors = lazy(() => import('./components/Docs/Customization/Colors/Colors'))
const AlertsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Alerts/AlertsDocumentation'))
const AvatarDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Avatar/AvatarDocumentation'))
const BadgesDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Badges/BadgesDocumentation'))
const BannerDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Banner/BannerDocumentation'))
const Buttons = lazy(() => import('./components/Docs/ComponentsDoc/Buttons/ButtonsDocumentation'))
const CardsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Cards/CardsDocumentation'))
const FooterDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Footer/Footer'))
const FormsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Forms/Forms'))
const JumbotronDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Jumbotron/JumbotronDocumentation'))
const KBDDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/KBD/KBDDocumentation'))
const ModalDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Modal/Modal'))
const PaginationDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Pagination/Pagination'))
const PricingDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Pricing/PricingDocumentation'))
const ProgressDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Progress/ProgressDocumentation'))
const RatingDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Rating/RatingDocumentation'))
const SkeletonDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Skeleton/SkeletonDocumentation'))
const SpinnersDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Spinners/SpinnersDocumentation'))
const StepperDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Stepper/Stepper'))
const SurveyDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Survey/SurveyDocumentation'))
const TimelineDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Timeline/Timeline'))
const ToastsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Toasts/ToastsDocumentation'))
const AccordionDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Accordion/AccordionDocumentation'))
const BreadcrumbDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Breadcrumb/BreadcrumbDocumentation'))
const CarouselDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Carousel/CarouselDocumentation'))
const ChipinputDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/ChipInput/ChipInputDocumentation'))
const CommandpaletteDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/CommandPalette/CommandPaletteDocumentation'))
const DatepickerDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/DatePicker/DatePickerDocumentation'))
const DrawerDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Drawer/DrawerDocumentation'))
const DropdownDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Dropdown/DropdownDocumentation'))
const EmptystateDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/EmptyState/EmptyStateDocumentation'))
const FileuploadDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/FileUpload/FileUploadDocumentation'))
const NavbarDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Navbar/NavbarDocumentation'))
const PopoverDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Popover/PopoverDocumentation'))
const SliderDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Slider/SliderDocumentation'))
const StatsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Stats/StatsDocumentation'))
const TableDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Table/TableDocumentation'))
const TabsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Tabs/TabsDocumentation'))
const TooltipDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Tooltip/TooltipDocumentation'))
const ChartsDocumentation = lazy(() => import('./components/Docs/ComponentsDoc/Charts/ChartsDocumentation'))
const BrandColor = lazy(() => import('./components/Docs/Customization/BrandColor/BrandColor'))
const TextsCustomization = lazy(() => import('./components/Docs/Customization/Texts/Texts'))

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <RouteSeo />
          <Routes>
            <Route element={<NavbarContainer />}>
              <Route path='/' element={<Home />} />
              <Route path='/components' element={<ComponentsSection page />} />
              <Route path='/docs' element={<DocsLayout />}>
                <Route path='/docs/getting-started/introduction' element={<Introduction />} />
                <Route path='/docs/getting-started/installation' element={<Installation />} />
                <Route path='/docs/getting-started/changelog' element={<Changelog />} />
                <Route path='/docs/customization/dark-mode' element={<DarkMode />} />
                <Route path='/docs/customization/brand-color' element={<BrandColor />} />
                <Route path='/docs/customization/texts' element={<TextsCustomization />} />
                <Route path='/docs/customization/colors' element={<Colors />} />
                <Route path='/docs/components/alerts' element={<AlertsDocumentation />} />
                <Route path='/docs/components/avatar' element={<AvatarDocumentation />} />
                <Route path='/docs/components/badges' element={<BadgesDocumentation />} />
                <Route path='/docs/components/banner' element={<BannerDocumentation />} />
                <Route path='/docs/components/buttons' element={<Buttons />} />
                <Route path='/docs/components/cards' element={<CardsDocumentation />} />
                <Route path='/docs/components/charts' element={<ChartsDocumentation />} />
                <Route path='/docs/components/footer' element={<FooterDocumentation />} />
                <Route path='/docs/components/forms' element={<FormsDocumentation />} />
                <Route path='/docs/components/jumbotron' element={<JumbotronDocumentation />} />
                <Route path='/docs/components/kbd' element={<KBDDocumentation />} />
                <Route path='/docs/components/modal' element={<ModalDocumentation />} />
                <Route path='/docs/components/pagination' element={<PaginationDocumentation />} />
                <Route path='/docs/components/pricing' element={<PricingDocumentation />} />
                <Route path='/docs/components/progress' element={<ProgressDocumentation />} />
                <Route path='/docs/components/rating' element={<RatingDocumentation />} />
                <Route path='/docs/components/skeleton' element={<SkeletonDocumentation />} />
                <Route path='/docs/components/spinners' element={<SpinnersDocumentation />} />
                <Route path='/docs/components/stepper' element={<StepperDocumentation />} />
                <Route path='/docs/components/survey' element={<SurveyDocumentation />} />
                <Route path='/docs/components/timeline' element={<TimelineDocumentation />} />
                <Route path='/docs/components/toasts' element={<ToastsDocumentation />} />
                <Route path='/docs/components/accordion' element={<AccordionDocumentation />} />
                <Route path='/docs/components/breadcrumb' element={<BreadcrumbDocumentation />} />
                <Route path='/docs/components/carousel' element={<CarouselDocumentation />} />
                <Route path='/docs/components/chip-input' element={<ChipinputDocumentation />} />
                <Route path='/docs/components/command-palette' element={<CommandpaletteDocumentation />} />
                <Route path='/docs/components/date-picker' element={<DatepickerDocumentation />} />
                <Route path='/docs/components/drawer' element={<DrawerDocumentation />} />
                <Route path='/docs/components/dropdown' element={<DropdownDocumentation />} />
                <Route path='/docs/components/empty-state' element={<EmptystateDocumentation />} />
                <Route path='/docs/components/file-upload' element={<FileuploadDocumentation />} />
                <Route path='/docs/components/navbar' element={<NavbarDocumentation />} />
                <Route path='/docs/components/popover' element={<PopoverDocumentation />} />
                <Route path='/docs/components/slider' element={<SliderDocumentation />} />
                <Route path='/docs/components/stats' element={<StatsDocumentation />} />
                <Route path='/docs/components/table' element={<TableDocumentation />} />
                <Route path='/docs/components/tabs' element={<TabsDocumentation />} />
                <Route path='/docs/components/tooltip' element={<TooltipDocumentation />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
