import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Rating/Rating.tsx?raw'
import { Rating, Review } from '../../../UI/Rating/Rating'

const file = 'src/components/UI/Rating/Rating.tsx'

const InteractiveDemo = () => {
    const [value, setValue] = useState(3)
    return (
        <div className='flex flex-col gap-2'>
            <Rating value={value} onChange={setValue} size={28} />
            <span className='text-sm text-neutral-600 dark:text-neutral-300'>Your rating: {value} / 5</span>
        </div>
    )
}

const interactiveCode = `const [value, setValue] = useState(3)

<Rating value={value} onChange={setValue} size={28} />`

const RatingDocumentation = () => {
    return (
        <DocPage title='Rating' description="Show the rating of an article so the user can base their opinion on others' reviews.">
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Read-only stars. Decimal values fill the star partially.' file={file}>
                <Rating value={3} />
                <Rating value={3.67} />
                <Rating value={5} />
            </Variant>

            <Variant title='With text' description='Show the value next to the stars.' file={file}>
                <Rating value={3.67} showValue />
            </Variant>

            <Variant title='With reviews' description='Show the number of reviews.' file={file} previewClassName='flex flex-col gap-4'>
                <Rating value={4.5} reviews={1243} />
                <Rating value={4.5} showValue reviews={1243} />
            </Variant>

            <Variant title='Interactive' description='Pass onChange and the stars become clickable. Try it.' file={file} code={interactiveCode}>
                <InteractiveDemo />
            </Variant>

            <Variant title='Review' description='A review with the author, date and rating.' file={file}>
                <Review author='Katherine Hoffman' rating={4} date='2 days ago'>Great quality and very comfortable. It arrived earlier than expected, I would buy it again.</Review>
            </Variant>
        </DocPage>
    )
}

export default RatingDocumentation
