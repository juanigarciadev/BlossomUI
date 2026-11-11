import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Separator/Separator.tsx?raw'
import { Separator } from '../../../UI/Separator/Separator'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Separator/Separator.tsx'

const column = 'flex w-full flex-col gap-6 [&>*]:max-w-md'

const SeparatorDocumentation = () => {
    return (
        <DocPage title='Separator' description='A thin line that splits content. Give it a label to build the classic "or" between two sign in options.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A horizontal line that fills the width.' file={file} previewClassName={column}>
                <div className='flex flex-col gap-3 text-sm text-neutral-600 dark:text-neutral-300'>
                    <p>Account settings</p>
                    <Separator />
                    <p>Notifications</p>
                </div>
            </Variant>

            <Variant title='With a label' description='Pass the text as children. `align` moves it to the start or the end of the line.' file={file} previewClassName={column}>
                <Separator>or</Separator>
                <Separator align='start'>Section</Separator>
                <Separator align='end'>Continue with</Separator>
            </Variant>

            <Variant title='Styles' description='`variant` can be `solid`, `dashed` or `dotted`.' file={file} previewClassName={column}>
                <Separator variant='solid' />
                <Separator variant='dashed' />
                <Separator variant='dotted' />
            </Variant>

            <Variant title='Vertical' description='`orientation="vertical"` splits items in a row. It takes the height of the row.' file={file}>
                <div className='flex h-6 items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300'>
                    <span>Blog</span>
                    <Separator orientation='vertical' />
                    <span>Docs</span>
                    <Separator orientation='vertical' />
                    <span>Source</span>
                </div>
            </Variant>

            <Variant title='In a form' description='A separator with a label between two ways to continue.' file={file} previewClassName={column}>
                <div className='flex flex-col gap-4 [&>button]:w-full'>
                    <Button color='primary'>Continue with email</Button>
                    <Separator>or</Separator>
                    <Button color='secondary'>Continue with Google</Button>
                </div>
            </Variant>

            <Variant title='Decorative' description='`decorative` hides the line from screen readers when it is only a visual detail and does not split real sections.' file={file} previewClassName={column}>
                <Separator decorative variant='dashed' />
            </Variant>
        </DocPage>
    )
}

export default SeparatorDocumentation
