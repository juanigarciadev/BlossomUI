import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Timeline/Timeline.tsx?raw'
import { Timeline } from '../../../UI/Timeline/Timeline'

const file = 'src/components/UI/Timeline/Timeline.tsx'

const icon = (path) => (
    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d={path} />
    </svg>
)

const releases = [
    { title: 'Blossom UI released', date: 'October 2023', description: 'The first version of the library is available, free and open source.' },
    { title: 'Dark mode', date: 'December 2023', description: 'Every component now has its dark version.' },
    { title: 'TypeScript and hooks', date: 'Now', description: 'Components rewritten in React with TypeScript.' },
    { title: 'Figma file', date: 'Coming soon', description: 'A design kit to keep every project consistent.', pending: true },
]

const order = [
    { title: 'Order placed', date: 'Monday, 9:41 AM', icon: icon('M4 6h16M4 12h16M4 18h10') },
    { title: 'On its way', date: 'Tuesday, 2:15 PM', icon: icon('M3 7h11v9H3zM14 10h4l3 3v3h-7') },
    { title: 'Delivered', date: 'Pending', icon: icon('m5 12 5 5L20 7'), pending: true },
]

const activity = [
    { title: 'Pull request merged', date: '2h ago', description: 'Added the new pagination component to the library.' },
    { title: 'Issue opened', date: 'Yesterday', description: 'Request: a stepper component for multi step forms.' },
]

const TimelineDocumentation = () => {
    return (
        <DocPage title='Timeline' description='Show a series of events in chronological order.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A vertical line with a dot for every event. Mark upcoming events as pending.' file={file} previewClassName='block' code={'<Timeline items={releases} />'}>
                <Timeline items={releases} />
            </Variant>

            <Variant title='With icons' description='Use the icon of every item as its marker.' file={file} previewClassName='block' code={'<Timeline items={order} variant="icons" />'}>
                <Timeline items={order} variant='icons' />
            </Variant>

            <Variant title='With cards' description='Group the details of every event inside a card.' file={file} previewClassName='block' code={'<Timeline items={activity} variant="cards" />'}>
                <Timeline items={activity} variant='cards' />
            </Variant>
            <Variant title='Custom color' description='Use `color` for the markers. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <Timeline items={releases} color='#0f766e' />
            </Variant>

        </DocPage>
    )
}

export default TimelineDocumentation
