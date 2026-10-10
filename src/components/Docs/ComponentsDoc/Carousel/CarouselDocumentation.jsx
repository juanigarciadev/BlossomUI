import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Carousel/Carousel.tsx?raw'
import { Carousel } from '../../../UI/Carousel/Carousel'

const file = 'src/components/UI/Carousel/Carousel.tsx'

const colors = [
    'from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900',
    'from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900',
    'from-amber-200 to-orange-200 dark:from-amber-900 dark:to-orange-900',
    'from-emerald-200 to-lime-200 dark:from-emerald-900 dark:to-lime-900',
]

const slides = colors.map((color, index) => (
    <div key={color} className={`flex h-56 items-center justify-center bg-gradient-to-br text-3xl font-bold text-neutral-800 dark:text-white ${color}`}>
        Slide {index + 1}
    </div>
))

const CarouselDocumentation = () => {
    return (
        <DocPage title='Carousel' description='A row of slides that snaps into place. Swipe on touch screens, use the arrows or jump with the dots.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Pass any nodes as slides. The scroll position drives the state, so swiping and buttons stay in sync.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <Carousel slides={slides} />
            </Variant>

            <Variant title='Autoplay' description='Advances by itself and pauses on hover and focus. Use `loop` to return to the first slide.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <Carousel slides={slides} autoPlay loop interval={3000} />
            </Variant>

            <Variant title='Without dots' description='Hide the dots when there are many slides.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <Carousel slides={slides} dots={false} />
            </Variant>
            <Variant title='Custom color' description='Use `color` for the active dot and the focus rings. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <Carousel slides={slides} color='#0f766e' />
            </Variant>

        </DocPage>
    )
}

export default CarouselDocumentation
