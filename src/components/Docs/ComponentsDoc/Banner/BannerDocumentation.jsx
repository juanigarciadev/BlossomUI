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

            <Variant title='Default' description='A banner with an icon and a message. The close button hides it.' file={file} previewClassName='flex flex-col gap-4'>
                <Banner icon={<MegaphoneIcon />}>
                    We updated our <a href='#' className='text-blue-500 underline hover:no-underline'>Terms and Conditions</a>
                </Banner>
                <SkeletonText />
            </Variant>

            <Variant title='Not dismissible' description='Set `dismissible` to false to remove the close button.' file={file} previewClassName='flex'>
                <Banner dismissible={false}>Scheduled maintenance on Sunday at 3:00 AM.</Banner>
            </Variant>
        </DocPage>
    )
}

export default BannerDocumentation
