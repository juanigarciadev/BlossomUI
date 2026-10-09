import Default from './Default'
import Rounded from './Rounded'
import Social from './Social'
import SocialIconOnly from './SocialIconOnly'
import SocialIconOnlyRounded from './SocialIconsOnlyRounded'
import SocialRounded from './SocialRounded'
import LoadersButtons from './Loaders'
import RoundedLoadersButtons from './RoundedLoaders'
import DocPage from '../../DocPage'

const Buttons = () => {
    return (
        <DocPage title='Buttons'>
            <Default />
            <Rounded />
            <Social />
            <SocialRounded />
            <SocialIconOnly />
            <SocialIconOnlyRounded />
            <LoadersButtons />
            <RoundedLoadersButtons />
        </DocPage>
    )
}

export default Buttons
