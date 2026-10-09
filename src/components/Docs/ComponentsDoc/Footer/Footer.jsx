import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Footer/Footer.tsx?raw'
import { Footer } from '../../../UI/Footer/Footer'
import { SocialButton } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Footer/Footer.tsx'

const links = [
    { label: 'About', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Licensing', href: '#' },
    { label: 'Contact', href: '#' },
]

const columns = [
    { title: 'Product', links: [{ label: 'Components', href: '#' }, { label: 'Changelog', href: '#' }, { label: 'Roadmap', href: '#' }] },
    { title: 'Resources', links: [{ label: 'Documentation', href: '#' }, { label: 'Tailwind CSS', href: '#' }, { label: 'Figma', href: '#' }] },
    { title: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }, { label: 'License', href: '#' }] },
]

const social = <><SocialButton provider='github' iconOnly rounded /><SocialButton provider='x' iconOnly rounded /></>

const FooterDocumentation = () => {
    return (
        <DocPage title='Footer' description='Close your pages with useful links and information.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Simple' description='Copyright and a short row of links.' file={file} previewClassName='block' code={"<Footer brand=\"Blossom UI\" links={links} />"}>
                <Footer brand='Blossom UI' links={links} />
            </Variant>

            <Variant title='With columns' description='Groups of links, a description and social icons.' file={file} previewClassName='block' code={"<Footer\n  brand=\"Blossom UI\"\n  description=\"Free and open source components made with React and Tailwind CSS.\"\n  columns={columns}\n  social={<SocialButtons />}\n/>"}>
                <Footer brand='Blossom UI' description='Free and open source components made with React and Tailwind CSS.' columns={columns} social={social} />
            </Variant>

            <Variant title='Centered' description='Brand, links and social icons centered.' file={file} previewClassName='block' code={"<Footer brand=\"Blossom UI\" align=\"center\" links={links} social={<SocialButtons />} />"}>
                <Footer brand='Blossom UI' align='center' links={links} social={social} />
            </Variant>
        </DocPage>
    )
}

export default FooterDocumentation
