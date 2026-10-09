import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Pricing/Pricing.tsx?raw'
import { Pricing } from '../../../UI/Pricing/Pricing'

const file = 'src/components/UI/Pricing/Pricing.tsx'

const plans = [
    {
        name: 'Free',
        price: 0,
        features: [
            { label: 'Single user', included: true },
            { label: '5GB Storage', included: true },
            { label: 'Unlimited Public Projects', included: true },
            { label: 'Community Access', included: true },
            { label: 'Unlimited Private Projects', included: false },
            { label: 'Dedicated Phone Support', included: false },
        ],
    },
    {
        name: 'Plus',
        price: 5,
        highlighted: true,
        features: [
            { label: 'Single user', included: true },
            { label: '50GB Storage', included: true },
            { label: 'Unlimited Public Projects', included: true },
            { label: 'Community Access', included: true },
            { label: 'Unlimited Private Projects', included: true },
            { label: 'Dedicated Phone Support', included: false },
        ],
    },
    {
        name: 'Pro',
        price: 15,
        features: [
            { label: 'Up to 10 users', included: true },
            { label: '500GB Storage', included: true },
            { label: 'Unlimited Public Projects', included: true },
            { label: 'Community Access', included: true },
            { label: 'Unlimited Private Projects', included: true },
            { label: 'Dedicated Phone Support', included: true },
        ],
    },
]

const PricingDocumentation = () => {
    return (
        <DocPage title='Pricing' description='Compare the plans of your product.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Plans with their features and a button to subscribe.' file={file} previewClassName='flex' code={'<Pricing plans={plans} />'}>
                <Pricing plans={plans} />
            </Variant>

            <Variant title='Border accent' description='Outline the recommended plan with variant border.' file={file} previewClassName='flex' code={'<Pricing plans={plans} variant="border" />'}>
                <Pricing plans={plans} variant='border' />
            </Variant>

            <Variant title='Size accent' description='Make the recommended plan bigger with variant size.' file={file} previewClassName='flex' code={'<Pricing plans={plans} variant="size" />'}>
                <Pricing plans={plans} variant='size' />
            </Variant>

            <Variant title='Billing toggle' description='Add a monthly / yearly switch. Prices update when the user changes it.' file={file} previewClassName='flex' code={'<Pricing plans={plans} variant="border" billingToggle />'}>
                <Pricing plans={plans} variant='border' billingToggle />
            </Variant>
        </DocPage>
    )
}

export default PricingDocumentation
