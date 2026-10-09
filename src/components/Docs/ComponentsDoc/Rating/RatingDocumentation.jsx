import Rating from './Rating'
import RatingWithText from './RatingWithText'
import Reviews from './ReviewsNumber'
import ReviewComment from './ReviewComment'
import DocPage from '../../DocPage'

const RatingDocumentation = () => {
    return (
        <DocPage title='Rating'>
            <Rating />
            <RatingWithText />
            <Reviews />
            <ReviewComment />
        </DocPage>
    )
}

export default RatingDocumentation
