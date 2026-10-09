import Slate from './Slate/Slate'
import Gray from './Gray/Gray'
import Zinc from './Zinc/Zinc'
import Neutral from './Neutral/Neutral'
import Stone from './Stone/Stone'
import Red from './Red/Red'
import Orange from './Orange/Orange'
import Amber from './Amber/Amber'
import Yellow from './Yellow/Yellow'
import Lime from './Lime/Lime'
import Green from './Green/Green'
import Emerald from './Emerald/Emerald'
import Teal from './Teal/Teal'
import Cyan from './Cyan/Cyan'
import Sky from './Sky/Sky'
import Blue from './Blue/Blue'
import Indigo from './Indigo/Indigo'
import Violet from './Violet/Violet'
import Purple from './Purple/Purple'
import Fuchsia from './Fuchsia/Fuchsia'
import Pink from './Pink/Pink'
import Rose from './Rose/Rose'
import DocPage from '../../DocPage'

const Colors = () => {
    return (
        <DocPage title='Colors'>
                <div className='flex flex-col gap-10 w-full 2xl:flex-col lg:grid lg:grid-cols-5 lg:justify-between md:gap-2 md:gap-y-10 xs:grid-cols-2 xxs:flex xxs:w-12'>
                    <Slate />
                    <Gray />
                    <Zinc />
                    <Neutral />
                    <Stone />
                    <Red />
                    <Orange />
                    <Amber />
                    <Yellow />
                    <Lime />
                    <Green />
                    <Emerald />
                    <Teal />
                    <Cyan />
                    <Sky />
                    <Blue />
                    <Indigo />
                    <Violet />
                    <Purple />
                    <Fuchsia />
                    <Pink />
                    <Rose />
                </div>
        </DocPage>
    )
}

export default Colors
