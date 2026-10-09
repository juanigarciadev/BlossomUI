import DefaultBadges from './Default'
import OutlinedBadges from './Outlined'
import DefaultRoundedBadges from './DefaultRounded'
import OutlinedRoundedBadges from './OutlinedRounded'
import BadgesWithIcons from './WithIcons'
import BadgesWithIconsOnly from './IconsOnly'
import DocPage from '../../DocPage'

const BadgesDocumentation = () => {
    return (
        <DocPage title='Badges'>
            <DefaultBadges />
            <BadgesWithIcons />
            <BadgesWithIconsOnly />
            <OutlinedBadges />
            <DefaultRoundedBadges />
            <OutlinedRoundedBadges />
        </DocPage>
    )
}

export default BadgesDocumentation
