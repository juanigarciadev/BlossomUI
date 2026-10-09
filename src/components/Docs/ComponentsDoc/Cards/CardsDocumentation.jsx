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

const CardsDocumentation = () => {
    return (
        <DocPage title='Cards' description='Group related information in a container.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A title, a description and an optional icon.' file={file}>
                <Card icon={<SmileIcon />} title='Customizable' description='Highly customizable, just modify the Tailwind classes and voilà!' />
                <Card title='Simple card' description='Without an icon it works as a plain container.' />
            </Variant>

            <Variant title='With footer' description='Use the footer prop to add buttons or links.' file={file}>
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
        </DocPage>
    )
}

export default CardsDocumentation
