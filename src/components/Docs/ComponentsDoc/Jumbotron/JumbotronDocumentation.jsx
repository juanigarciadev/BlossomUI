import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Jumbotron/Jumbotron.tsx?raw'
import { Jumbotron } from '../../../UI/Jumbotron/Jumbotron'
import { Button } from '../../../UI/Buttons/Button'
import { Badge } from '../../../UI/Badges/Badge'
import { Avatar, AvatarGroup } from '../../../UI/Avatar/Avatar'
import { ProgressBar } from '../../../UI/Progress/ProgressBar'

const file = 'src/components/UI/Jumbotron/Jumbotron.tsx'

const lake = 'https://res.cloudinary.com/diruiumfk/image/upload/v1698362153/lake_zmcuam.jpg'
const photos = [
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg',
]

const ArrowIcon = () => (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M5 12h14M13 6l6 6-6 6' />
    </svg>
)

const Mockup = () => (
    <div className='flex w-full max-w-sm flex-col gap-4 rounded-xl border border-neutral-300 bg-white p-5 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'>
        <div className='flex items-center justify-between'>
            <AvatarGroup avatars={photos.map((src) => ({ src }))} size='sm' />
            <Badge color='green' rounded>On track</Badge>
        </div>
        <ProgressBar value={72} label='Project progress' showValue />
        <div className='flex items-center gap-3'>
            <Avatar src={photos[0]} status='online' />
            <span className='text-sm text-neutral-600 dark:text-neutral-300'>Katherine shipped a new component.</span>
        </div>
    </div>
)

const JumbotronDocumentation = () => {
    return (
        <DocPage title='Jumbotron' description='A big hero section to present your project. It adapts to its container with no breakpoints, so it works the same in any project.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A title, a description and two actions.' file={file} previewClassName='flex'>
                <Jumbotron
                    title='Completely free and easy to use.'
                    description='Customizable, reusable and beautiful components made with Tailwind.'
                    actions={<><Button color='default'>Get started</Button><Button color='secondary'>Learn more</Button></>}
                />
            </Variant>

            <Variant title='With eyebrow' description='Add a small badge above the title with `eyebrow`.' file={file} previewClassName='flex' code={`<Jumbotron
  eyebrow="Now with dark mode"
  title="Build faster with Blossom UI."
  description="Copy, paste and ship."
  actions={<Button color="default">Get started</Button>}
/>`}>
                <Jumbotron
                    eyebrow='Now with dark mode'
                    title='Build faster with Blossom UI.'
                    description='Copy, paste and ship.'
                    actions={<Button color='default'>Get started</Button>}
                />
            </Variant>

            <Variant title='Gradient' description='A soft gradient surface that works in light and dark mode.' file={file} previewClassName='flex'>
                <Jumbotron
                    variant='gradient'
                    eyebrow='New release'
                    title='Components that feel at home.'
                    description='Every component supports dark mode and ships as a single TypeScript file.'
                    actions={<><Button color='default' icon={<ArrowIcon />}>Explore</Button><Button color='secondary'>Changelog</Button></>}
                />
            </Variant>

            <Variant title='Card' description='Contain the hero in a bordered surface.' file={file} previewClassName='flex'>
                <Jumbotron
                    variant='card'
                    title='Simple, honest pricing.'
                    description='Start for free and upgrade when your team grows.'
                    actions={<Button color='primary'>See plans</Button>}
                />
            </Variant>

            <Variant title='Left aligned with media' description='With `align` left the `media` prop sits beside the text and wraps below it on narrow screens.' file={file} previewClassName='flex' code={`<Jumbotron
  align="left"
  variant="card"
  eyebrow="Team workspace"
  title="Keep everyone on the same page."
  description="Track progress and celebrate every release together."
  actions={<Button color="default">Start free</Button>}
  media={<Mockup />}
/>`}>
                <Jumbotron
                    align='left'
                    variant='card'
                    eyebrow='Team workspace'
                    title='Keep everyone on the same page.'
                    description='Track progress and celebrate every release together.'
                    actions={<Button color='default'>Start free</Button>}
                    media={<Mockup />}
                />
            </Variant>

            <Variant title='With background image' description='Use `variant="image"` with `backgroundImage`. A dark layer keeps the text readable.' file={file} previewClassName='flex'>
                <Jumbotron
                    variant='image'
                    backgroundImage={lake}
                    title='Completely free and easy to use.'
                    description='Customizable, reusable and beautiful components made with Tailwind.'
                    actions={<><Button color='default'>Get started</Button><Button color='secondary' className='border-white/60 text-white hover:bg-white/10'>Learn more</Button></>}
                />
            </Variant>
            <Variant title='Custom color' description='Use `color` for the eyebrow and the gradient. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full'>
                <Jumbotron eyebrow='New' title='Your brand, your color' description='The pill and the gradient follow the accent.' variant='gradient' color='#0f766e' />
            </Variant>

        </DocPage>
    )
}

export default JumbotronDocumentation
