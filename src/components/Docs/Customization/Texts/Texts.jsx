import { useState } from 'react'
import CodeBlock from '@codeBlock'
import DocPage from '../../DocPage'
import CompVersionTitle from '../../../CompVersionTitle/CompVersionTitle'
import { Pagination } from '../../../UI/Pagination/Pagination'
import { Pricing } from '../../../UI/Pricing/Pricing'
import { ProductCard } from '../../../UI/Card/Card'
import { Rating } from '../../../UI/Rating/Rating'
import { DatePicker } from '../../../UI/DatePicker/DatePicker'
import { StepperProgress } from '../../../UI/Stepper/Stepper'

const shoe = 'https://res.cloudinary.com/diruiumfk/image/upload/v1701482959/jordan-dior_lp6sqo.webp'

const pesos = (value) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)

const paginationLabels = {
    navigation: 'Paginación',
    previous: 'Anterior',
    next: 'Siguiente',
    previousPage: 'Página anterior',
    nextPage: 'Página siguiente',
    page: (page) => `Página ${page}`,
}

const plans = [
    { name: 'Gratis', price: 0, features: [{ label: 'Un proyecto', included: true }, { label: 'Soporte', included: false }] },
    { name: 'Pro', price: 12000, highlighted: true, features: [{ label: 'Proyectos ilimitados', included: true }, { label: 'Soporte', included: true }] },
]

const code = `// Every component with texts has a labels prop. Pass only what you want to change.
const paginationLabels = {
  previous: 'Anterior',
  next: 'Siguiente',
  previousPage: 'Página anterior',
  nextPage: 'Página siguiente',
  page: (page: number) => \`Página \${page}\`,
}

<Pagination page={page} total={8} onChange={setPage} labels={paginationLabels} />

// Prices: formatPrice receives the number and returns the text.
const pesos = (value: number) =>
  new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value)

<ProductCard image={image} name="Zapatillas" price={89900} formatPrice={pesos} labels={{ addToCart: 'Agregar al carrito' }} />`

const rows = [
    ['Pagination, SimplePagination', 'labels', 'Previous, Next, page names and "Page 2 of 8"'],
    ['Stepper, StepperProgress', 'labels', '"Step 2 of 4"'],
    ['Rating', 'labels', 'Stars, "3 out of 5" and the number of reviews'],
    ['ProductCard', 'labels, formatPrice', 'Add to cart, favorites, stock, options and the photo viewer'],
    ['Pricing', 'labels, formatPrice', 'Billing toggle, per month and year, and the button'],
    ['Survey', 'labels', 'You answered, Change and Close'],
    ['DatePicker, DateRangePicker', 'labels, placeholder, locale', 'Calendar texts, month and day names'],
    ['Carousel', 'labels', 'Previous, next and the name of each slide'],
    ['Table', 'labels, empty', 'Select all and select row'],
    ['Navbar', 'labels', 'Navigation and the mobile menu button'],
    ['Footer', 'labels', 'All rights reserved'],
    ['Modal, Drawer', 'closeLabel', 'Close button'],
    ['Alert, Badge, Toast, Banner', 'dismissLabel', 'Dismiss button (Banner also has label)'],
    ['FileUpload, ChipInput', 'labels', 'Remove buttons and the duplicate message'],
    ['Select, MultiSelect', 'placeholder, noResultsLabel', 'Placeholder and the empty search'],
    ['SocialButton', 'label', 'The text of the button'],
    ['Spinner, SkeletonText, SkeletonImage', 'label', 'Text for screen readers'],
    ['CommandPalette, Breadcrumb', 'label', 'Accessible name'],
]

const Preview = () => {
    const [page, setPage] = useState(2)
    return (
        <div className='flex flex-wrap items-start gap-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-[#222222]'>
            <div className='flex w-full flex-col gap-6'>
                <Pagination page={page} total={8} onChange={setPage} labels={paginationLabels} />
                <StepperProgress total={4} current={1} labels={{ step: (current, total) => `Paso ${current} de ${total}` }} />
                <Rating
                    value={4}
                    showValue
                    reviews={1280}
                    labels={{
                        stars: (value, max) => `${value} de ${max} estrellas`,
                        outOf: (value, max) => `${value} de ${max}`,
                        reviews: (count) => `${count.toLocaleString('es-AR')} reseñas`,
                    }}
                />
                <div className='max-w-xs'>
                    <DatePicker
                        label='Fecha'
                        locale='es-AR'
                        placeholder='Elegí una fecha'
                        labels={{ choose: 'Elegir una fecha', previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente' }}
                    />
                </div>
            </div>
            <ProductCard
                image={shoe}
                brand='Nike'
                name='Air Jordan Low'
                description='Zapatillas de cuero con suela acolchada.'
                price={89900}
                originalPrice={109900}
                rating={4}
                reviews={128}
                formatPrice={pesos}
                labels={{
                    addToCart: 'Agregar al carrito',
                    added: '¡Agregado!',
                    addToFavorites: 'Agregar a favoritos',
                    removeFromFavorites: 'Quitar de favoritos',
                    stars: (rating) => `${rating} de 5 estrellas`,
                }}
            />
            <div className='w-full'>
                <Pricing
                    plans={plans}
                    billingToggle
                    formatPrice={pesos}
                    labels={{ billingPeriod: 'Período de facturación', monthly: 'Mensual', yearly: 'Anual', perMonth: 'mes', perYear: 'año', subscribe: 'Elegir plan' }}
                />
            </div>
        </div>
    )
}

const Texts = () => (
    <DocPage
        title='Texts and translation'
        description='The components have their texts in English, but none of them is fixed: every one can be translated or changed with a prop, and prices use the format you want.'
    >
        <section>
            <CompVersionTitle title='Example in Spanish' paragraph='The same components with their texts and prices in Spanish (Argentina).' />
            <Preview />
        </section>

        <section>
            <CompVersionTitle title='How it works' paragraph='Pass only the texts you want to change. The rest keep the default.' />
            <CodeBlock name='Translate.tsx' code={code} language='tsx' />
        </section>

        <section>
            <CompVersionTitle title='Where to translate' paragraph='These components have texts you can change.' />
            <div className='overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700'>
                <table className='w-full min-w-[32rem] text-left text-sm'>
                    <thead className='bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300'>
                        <tr>
                            <th className='px-4 py-2 font-medium'>Component</th>
                            <th className='px-4 py-2 font-medium'>Prop</th>
                            <th className='px-4 py-2 font-medium'>Texts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([component, prop, texts]) => (
                            <tr key={component} className='border-t border-neutral-200 align-top dark:border-neutral-700'>
                                <td className='px-4 py-2'>{component}</td>
                                <td className='px-4 py-2 font-mono text-xs text-pink-600 dark:text-pink-300'>{prop}</td>
                                <td className='px-4 py-2 text-neutral-600 dark:text-neutral-300'>{texts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className='pt-3 text-sm text-neutral-500'>
                Texts you already pass as props, such as titles, labels and placeholders, are yours to write in any language. The default options of Survey are in English: pass your own in <code className='font-mono'>options</code>.
            </p>
        </section>
    </DocPage>
)

export default Texts
