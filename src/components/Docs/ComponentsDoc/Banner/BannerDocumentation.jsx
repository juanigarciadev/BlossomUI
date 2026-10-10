import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Banner/Banner.tsx?raw'
import { Banner } from '../../../UI/Banner/Banner'
import { SkeletonText } from '../../../UI/Skeleton/Skeleton'

const file = 'src/components/UI/Banner/Banner.tsx'

const MegaphoneIcon = () => (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6' />
    </svg>
)

const BannerDocumentation = () => {
    return (
        <DocPage title='Banner' description='Announce something important at the top of your page.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A banner with an icon and a message.' file={file} previewClassName='flex flex-col gap-4'>
                <Banner icon={<MegaphoneIcon />}>
                    We updated our <a href='#' className='text-blue-500 underline hover:no-underline'>Terms and Conditions</a>
                </Banner>
                <SkeletonText />
            </Variant>

            <Variant title='Dismissible' description='Set `dismissible` to add a close button that hides the banner. Use `onDismiss` to know when it happens.' file={file} previewClassName='flex'>
                <Banner dismissible>Scheduled maintenance on Sunday at 3:00 AM.</Banner>
            </Variant>
            <Variant title='Colors' description='Choose the color with `color`: default, dark, blue, green, yellow or red. Use `accent` for the brand color of your site, or any CSS color. The text switches between black and white to stay readable.' file={file} previewClassName='flex flex-col gap-4'>
                <Banner color='dark'>Free shipping on orders over $40.</Banner>
                <Banner color='accent'>Use the code BLOSSOM and get 10% off.</Banner>
                <Banner color='yellow'>The store closes early today.</Banner>
                <Banner color='#7c3aed'>A banner in any color you like.</Banner>
            </Variant>

        </DocPage>
    )
}

export default BannerDocumentation
