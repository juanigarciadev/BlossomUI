import Pricing from './Default'
import BorderAccent from './BorderAccent'
import SizeAccent from './SizeAccent'
import DocPage from '../../DocPage'

const PricingDocumentation = () => {
    return (
        <DocPage title='Pricing'>
            <Pricing />
            <BorderAccent />
            <SizeAccent />
        </DocPage>
    )
}

export default PricingDocumentation
