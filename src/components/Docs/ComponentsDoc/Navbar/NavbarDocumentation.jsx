import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Navbar/Navbar.tsx?raw'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Navbar/Navbar.tsx'

const links = [
    { label: 'Home', href: '#', active: true },
    { label: 'Components', href: '#components' },
    { label: 'Pricing', href: '#pricing' },
]

const brand = <>Blossom <span className='text-pink-400'>UI</span></>

const NavbarDocumentation = () => {
    return (
        <DocPage title='Navbar' description='A top bar with a brand, links and actions. On small screens the links collapse into a menu button.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='The active link is highlighted and marked with `aria-current`.' file={file} previewClassName='flex w-full' code={`<Navbar
    brand={<>Blossom <span className='text-pink-400'>UI</span></>}
    links={[
        { label: 'Home', href: '/', active: true },
        { label: 'Components', href: '/components' },
        { label: 'Pricing', href: '/pricing' },
    ]}
/>`}>
                <Navbar brand={brand} links={links} />
            </Variant>

            <Variant title='With actions' description='Buttons placed at the right. They move into the mobile menu on small screens.' file={file} previewClassName='flex w-full'>
                <Navbar
                    brand={brand}
                    links={links}
                    actions={
                        <>
                            <Button color='secondary'>Sign in</Button>
                            <Button>Get started</Button>
                        </>
                    }
                />
            </Variant>
        </DocPage>
    )
}

export default NavbarDocumentation
