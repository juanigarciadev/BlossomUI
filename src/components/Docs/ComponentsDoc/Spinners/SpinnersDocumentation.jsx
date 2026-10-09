import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Spinners/Spinner.tsx?raw'
import { Spinner } from '../../../UI/Spinners/Spinner'

const file = 'src/components/UI/Spinners/Spinner.tsx'

const sizes = ['sm', 'md', 'lg', 'xl', '2xl']
const colors = ['default', 'red', 'green', 'yellow', 'purple', 'pink']

const SpinnersDocumentation = () => {
    return (
        <DocPage title='Spinners' description='Show the user that something is loading.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A simple spinner. It announces "Loading..." to screen readers.' file={file}>
                <Spinner />
            </Variant>

            <Variant title='Sizes' description='Try the five sizes.' file={file} previewClassName='flex flex-wrap items-center gap-4'>
                {sizes.map((size) => <Spinner key={size} size={size} />)}
            </Variant>

            <Variant title='Colors' description='Use the color prop.' file={file} previewClassName='flex flex-wrap items-center gap-4'>
                {colors.map((color) => <Spinner key={color} color={color} />)}
            </Variant>

            <Variant title='Transparent' description='Without the track around it.' file={file} previewClassName='flex flex-wrap items-center gap-4'>
                {colors.map((color) => <Spinner key={color} color={color} transparent />)}
            </Variant>
        </DocPage>
    )
}

export default SpinnersDocumentation
