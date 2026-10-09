import DefaultSkeletonDoc from './Default'
import ImageSkeletonDoc from './Image'
import DocPage from '../../DocPage'

const SkeletonDocumentation = () => {
    return (
        <DocPage title='Skeleton'>
            <DefaultSkeletonDoc/>
            <ImageSkeletonDoc/>
        </DocPage>
    )
}

export default SkeletonDocumentation
