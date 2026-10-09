import PercentageInside from './PercentageInside'
import PercentageAbove from './PercentageAbove'
import DefaultProgress from './Default'
import ProgressSize from './Sizes'
import DocPage from '../../DocPage'

const ProgressDocumentation = () => {
    return (
        <DocPage title='Progress'>
            <DefaultProgress />
            <ProgressSize />
            <PercentageInside />
            <PercentageAbove />
        </DocPage>
    )
}

export default ProgressDocumentation
