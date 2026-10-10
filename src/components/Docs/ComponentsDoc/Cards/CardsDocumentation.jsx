import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Card/Card.tsx?raw'
import { Card, ProductCard } from '../../../UI/Card/Card'

const file = 'src/components/UI/Card/Card.tsx'

const SmileIcon = () => (
    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='12' cy='12' r='10' /><path d='M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01' />
    </svg>
)

const shoe = 'https://res.cloudinary.com/diruiumfk/image/upload/v1701482959/jordan-dior_lp6sqo.webp'
// Transformations of the same photo, to have more than one picture in the gallery example
const shoeFlipped = shoe.replace('/upload/', '/upload/a_hflip/')
const shoeSepia = shoe.replace('/upload/', '/upload/e_sepia/')

const CardsDocumentation = () => {
    return (
        <DocPage title='Cards' description='Group related information in a container.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A title, a description and an optional icon.' file={file}>
                <Card icon={<SmileIcon />} title='Customizable' description='Highly customizable, just modify the Tailwind classes and voilà!' />
                <Card title='Simple card' description='Without an icon it works as a plain container.' />
            </Variant>

            <Variant title='With footer' description='Use the `footer` prop to add buttons or links.' file={file}>
                <Card
                    icon={<SmileIcon />}
                    title='Get started'
                    description='Copy the component and make it yours.'
                    footer={<a href='#' className='text-sm font-medium text-pink-500 hover:text-pink-600'>Read the docs →</a>}
                />
            </Variant>

            <Variant title='Products' description='Shows a product with its image, rating and price. The favorite and cart buttons keep their own state.' file={file}>
                <ProductCard image={shoe} name='Air Jordan Low' price={89.9} rating={4} badge='New' />
                <ProductCard image={shoe} name='Jordan x Dior' price={149} rating={5} />
            </Variant>

            <Variant title='With description' description='Add `brand`, `description` and `reviews`. The description is cut after two lines.' file={file}>
                <ProductCard
                    image={shoe}
                    brand='Nike'
                    name='Air Jordan Low'
                    description='Low top sneakers with a leather upper and a cushioned sole, made for all day comfort on and off the court.'
                    price={89.9}
                    rating={4}
                    reviews={128}
                />
            </Variant>

            <Variant title='Discount' description='Set `originalPrice` and the old price is crossed out. The percentage is calculated for you and shown as a badge above the name, together with `badge`. Use `currency` to change the symbol.' file={file}>
                <ProductCard image={shoe} name='Jordan x Dior' brand='Jordan' price={129} originalPrice={169} rating={5} reviews={86} badge='Sale' />
                <ProductCard image={shoe} name='Air Jordan Low' price={74.5} originalPrice={89.9} currency='€' rating={4} reviews={32} />
            </Variant>

            <Variant title='Colors and sizes' description='Give `colors` and `sizes` and the user can choose one. `onAddToCart` receives the choice as its second argument.' file={file}>
                <ProductCard
                    image={shoe}
                    brand='Nike'
                    name='Air Jordan Low'
                    description='Available in three colors.'
                    price={89.9}
                    rating={4}
                    colors={['#171717', '#f472b6', '#60a5fa']}
                    sizes={['38', '39', '40', '41']}
                />
            </Variant>

            <Variant title='Named colors' description='Give each color a `label` so screen readers, and `onAddToCart`, say "Midnight" and not a code.' file={file}>
                <ProductCard
                    image={shoe}
                    name='Air Jordan Low'
                    price={89.9}
                    colors={[{ value: '#171717', label: 'Midnight' }, { value: '#0f766e', label: 'Teal' }, { value: '#f472b6', label: 'Blossom' }]}
                    sizes={['39', '40', '41']}
                />
            </Variant>

            <Variant title='Expandable photo' description='Set `expandable` and pressing the photo opens it in full size. Close it with the button, Escape or a click outside.' file={file}>
                <ProductCard image={shoe} name='Air Jordan Low' brand='Nike' price={89.9} rating={4} reviews={128} expandable />
            </Variant>

            <Variant title='Gallery' description='Pass more photos in `images`. The expanded view gets arrows, thumbnails and keyboard navigation with the left and right keys.' file={file}>
                <ProductCard image={shoe} images={[shoeFlipped, shoeSepia]} name='Jordan x Dior' brand='Jordan' price={149} rating={5} reviews={86} />
            </Variant>

            <Variant title='Out of stock' description='Set `inStock` to false: the image is dimmed, an Out of stock badge is shown and the button is disabled.' file={file}>
                <ProductCard image={shoe} name='Jordan x Dior' brand='Jordan' price={149} rating={5} reviews={86} inStock={false} />
            </Variant>

            <Variant title='Horizontal' description='Use `layout` horizontal for lists and search results. It stacks on small screens.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <ProductCard
                    layout='horizontal'
                    image={shoe}
                    brand='Nike'
                    name='Air Jordan Low'
                    description='Low top sneakers with a leather upper and a cushioned sole, made for all day comfort on and off the court.'
                    price={74.5}
                    originalPrice={89.9}
                    rating={4}
                    reviews={128}
                    colors={['#171717', '#f472b6']}
                    sizes={['39', '40', '41']}
                />
            </Variant>
            <Variant title='Custom color' description='Use `color` in `Card` for the icon and in `ProductCard` for the selected color and size. `badgeColor` sets the color of the badge. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <Card icon={<SmileIcon />} title='Brand color' description='The icon follows the accent.' color='#0f766e' />
                <ProductCard image={shoe} name='Air Jordan Low' brand='Nike' price={89.9} rating={4} badge='New' badgeColor='#7c3aed' colors={['#171717', '#0f766e']} sizes={['39', '40', '41']} color='#0f766e' />
            </Variant>

            <Variant title='Same height in a grid' description='A product card fills the height of its cell and keeps the price and the button at the bottom, so a row of cards with texts of different length stays aligned.' file={file} previewClassName='grid grid-cols-2 items-stretch gap-4 sm:grid-cols-1'>
                <ProductCard image={shoe} name='Air Jordan Low' brand='Nike' description='Short text.' price={89.9} />
                <ProductCard image={shoe} name='Jordan x Dior' brand='Jordan' description='A much longer description that takes two lines in the card, so the other one has to stretch to match its height.' price={149} />
            </Variant>

            <Variant title='Button color' description='`buttonColor` paints the add to cart button with the brand color (`accent`) or any CSS color.' file={file}>
                <ProductCard image={shoe} name='Air Jordan Low' brand='Nike' price={89.9} buttonColor='accent' />
                <ProductCard image={shoe} name='Jordan x Dior' brand='Jordan' price={149} buttonColor='#7c3aed' />
            </Variant>

            <Variant title='Price by size' description='Give each size its own `price` (and `originalPrice`, or `inStock`) and the price of the card changes when the user chooses one. `onAddToCart` receives the price in `selection`. It also works for weights.' file={file}>
                <ProductCard
                    image={shoe}
                    name='Geisha Panama'
                    brand='Coffee'
                    description='Floral, peach and honey.'
                    price={21}
                    sizes={[
                        { value: '250 g', price: 21 },
                        { value: '500 g', price: 38, originalPrice: 42 },
                        { value: '1 kg', price: 70, inStock: false },
                    ]}
                />
            </Variant>

            <Variant title='Choose a size first' description='`requireSize` keeps the button disabled until the user chooses a size, and `preselectSize` starts with the first size in stock already chosen. Without them the card behaves as before.' file={file}>
                <ProductCard
                    image={shoe}
                    name='Geisha Panama'
                    brand='Coffee'
                    price={21}
                    requireSize
                    sizes={[{ value: '250 g', price: 21 }, { value: '500 g', price: 38 }, { value: '1 kg', price: 70 }]}
                />
                <ProductCard
                    image={shoe}
                    name='Bourbon Huila'
                    brand='Coffee'
                    price={17}
                    preselectSize
                    sizes={[{ value: '250 g', price: 17 }, { value: '500 g', price: 31 }, { value: '1 kg', price: 58 }]}
                />
            </Variant>

        </DocPage>
    )
}

export default CardsDocumentation
