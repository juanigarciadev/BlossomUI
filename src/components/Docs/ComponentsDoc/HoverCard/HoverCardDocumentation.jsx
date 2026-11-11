import { CalendarDays, MapPin } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/HoverCard/HoverCard.tsx?raw'
import { HoverCard } from '../../../UI/HoverCard/HoverCard'
import { Avatar } from '../../../UI/Avatar/Avatar'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/HoverCard/HoverCard.tsx'

const profile = (
    <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
            <Avatar name='Ana Martínez' size='lg' />
            <div className='flex flex-col'>
                <span className='font-medium text-neutral-900 dark:text-white'>Ana Martínez</span>
                <span className='text-xs text-neutral-500'>@anamartinez</span>
            </div>
        </div>
        <p>Designer of interfaces and maker of small tools. She writes about accessibility.</p>
        <div className='flex flex-col gap-1 text-xs text-neutral-500'>
            <span className='flex items-center gap-2'><MapPin size={14} /> Buenos Aires</span>
            <span className='flex items-center gap-2'><CalendarDays size={14} /> Joined March 2024</span>
        </div>
    </div>
)

const linkClass = 'font-medium text-corporative underline decoration-dotted underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-corporative rounded'

const HoverCardDocumentation = () => {
    return (
        <DocPage title='Hover card' description='A card with rich content that opens when you hover or focus a link or an avatar. Unlike a Tooltip you can move the pointer into it and use what it holds.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Hover the mention, or focus it with Tab. Escape closes the card.' file={file}>
                <p className='text-sm text-neutral-700 dark:text-neutral-300'>
                    The new design was shared by{' '}
                    <HoverCard content={profile} label='Profile of Ana Martínez'>
                        <a href='#hover-card' onClick={(event) => event.preventDefault()} className={linkClass}>@anamartinez</a>
                    </HoverCard>{' '}
                    this morning.
                </p>
            </Variant>

            <Variant title='On an avatar' description='Any element can be the trigger. The card flips to the other side when there is no room.' file={file}>
                <HoverCard content={profile} label='Profile of Ana Martínez' placement='top'>
                    <button type='button' className='rounded-full outline-none focus-visible:ring-2 focus-visible:ring-corporative' aria-label='Ana Martínez'>
                        <Avatar name='Ana Martínez' status='online' />
                    </button>
                </HoverCard>
            </Variant>

            <Variant title='With actions' description='The content is interactive, so it can hold buttons and links.' file={file}>
                <HoverCard
                    width={260}
                    label='Blossom UI'
                    content={
                        <div className='flex flex-col gap-3'>
                            <div>
                                <span className='font-medium text-neutral-900 dark:text-white'>Blossom UI</span>
                                <p className='text-xs text-neutral-500'>React components made with Tailwind CSS.</p>
                            </div>
                            <Button size='sm'>Follow</Button>
                        </div>
                    }
                >
                    <a href='#hover-card' onClick={(event) => event.preventDefault()} className={linkClass}>Blossom UI</a>
                </HoverCard>
            </Variant>

            <Variant title='Delays' description='`openDelay` and `closeDelay` are in milliseconds. A longer close delay makes it easier to reach the card.' file={file}>
                <HoverCard openDelay={0} closeDelay={400} content='Opens at once and stays for 400 ms after you leave.'>
                    <a href='#hover-card' onClick={(event) => event.preventDefault()} className={linkClass}>Instant card</a>
                </HoverCard>
            </Variant>

            <Variant title='Custom color' description='Use `color` for the accent of what is inside the card. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <HoverCard color='#0f766e' content='The accent of this card is teal.'>
                    <a href='#hover-card' onClick={(event) => event.preventDefault()} className={linkClass}>Teal card</a>
                </HoverCard>
            </Variant>
        </DocPage>
    )
}

export default HoverCardDocumentation
