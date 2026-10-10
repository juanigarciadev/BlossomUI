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
            <Variant title='Custom color' description='Use `color` for the active link and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full'>
                <Navbar brand={brand} links={links} color='#0f766e' />
            </Variant>

            <Variant title='Always visible actions' description='`actions` move into the menu on a narrow screen. Put in `alwaysVisibleActions` what has to stay in the bar, like the cart. `breakpoint` is the width in pixels where it collapses and the menu is rendered only when it is needed.' file={file} previewClassName='flex w-full'>
                <Navbar
                    brand={brand}
                    links={links}
                    actions={<Button color='secondary'>Sign in</Button>}
                    alwaysVisibleActions={<Button color='accent'>Cart</Button>}
                />
            </Variant>

        </DocPage>
    )
}

export default NavbarDocumentation
