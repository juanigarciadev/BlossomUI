import { Badge } from '../UI/Badges/Badge'
import { Button, SocialButton } from '../UI/Buttons/Button'
import { ProgressBar } from '../UI/Progress/ProgressBar'
import { AvatarGroup, AvatarInfo } from '../UI/Avatar/Avatar'
import { Spinner } from '../UI/Spinners/Spinner'
import { Appear } from '../Motion/Motion'

const photos = [
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg',
]

const Panel = ({ className = '', children }) => (
    <div className={`flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-xl shadow-neutral-200/50 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/60 dark:shadow-none ${className}`}>
        {children}
    </div>
)

const HeroComponents = () => {
    return (
        <Appear as='section' delay={0.1} y={24} className='relative flex w-full flex-col gap-4 lg:items-start'>
            <Panel className='float-slow'>
                <div className='flex flex-wrap gap-4'>
                    <Badge color='red'>This is a badge</Badge>
                    <Badge color='purple' rounded outlined>Outlined and rounded</Badge>
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <Button color='purple'>Purple</Button>
                    <Button color='yellow' rounded>Yellow</Button>
                    <SocialButton provider='apple' />
                    <SocialButton provider='google' iconOnly />
                    <SocialButton provider='github' iconOnly rounded />
                </div>
            </Panel>
            <Panel className='float-slower ml-10 lg:ml-0'>
                <div className='flex flex-wrap items-center gap-4'>
                    <div className='w-40'><ProgressBar value={75} size='xl' showValueInside /></div>
                    <AvatarGroup avatars={photos.map((src) => ({ src }))} max={3} />
                    <AvatarInfo src={photos[0]} name='Katherine Hoffman' description='Active now' status='online' />
                    <Spinner />
                </div>
            </Panel>
        </Appear>
    )
}

export default HeroComponents
