import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Breadcrumb/Breadcrumb.tsx?raw'
import { Breadcrumb } from '../../../UI/Breadcrumb/Breadcrumb'

const file = 'src/components/UI/Breadcrumb/Breadcrumb.tsx'

const items = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb' },
]

const BreadcrumbDocumentation = () => {
    return (
        <DocPage title='Breadcrumb' description='Show where the user is in the site hierarchy. The last item is marked with `aria-current`.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A chevron separates the items.' file={file}>
                <Breadcrumb items={items} />
            </Variant>

            <Variant title='Slash' description='Use the slash separator for a lighter look.' file={file}>
                <Breadcrumb items={items} separator='slash' />
            </Variant>

            <Variant title='Deep' description='Long paths wrap to the next line on small screens.' file={file}>
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Docs', href: '/docs' },
                        { label: 'Components', href: '/components' },
                        { label: 'Forms', href: '/docs/components/forms' },
                        { label: 'Select' },
                    ]}
                />
            </Variant>
        </DocPage>
    )
}

export default BreadcrumbDocumentation
