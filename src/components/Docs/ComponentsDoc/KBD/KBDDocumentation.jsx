import SpecialKeys from './SpecialKeys'
import ReliefKeys from './Relief'
import DocPage from '../../DocPage'

const KBDDocumentation = () => {
    return (
        <DocPage title='KBD'>
            <SpecialKeys />
            <ReliefKeys />
        </DocPage>
    )
}

export default KBDDocumentation
