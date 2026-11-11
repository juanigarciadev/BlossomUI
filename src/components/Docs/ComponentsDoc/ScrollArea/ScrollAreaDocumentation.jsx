import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/ScrollArea/ScrollArea.tsx?raw'
import { ScrollArea } from '../../../UI/ScrollArea/ScrollArea'

const file = 'src/components/UI/ScrollArea/ScrollArea.tsx'

const tags = Array.from({ length: 30 }, (_, index) => `v2.${30 - index}.0`)

const List = () => (
    <ul className='flex flex-col'>
        {tags.map((tag) => (
            <li key={tag} className='border-b border-neutral-200 px-4 py-2.5 text-sm text-neutral-700 last:border-0 dark:border-neutral-700 dark:text-neutral-300'>{tag}</li>
        ))}
    </ul>
)

const boxed = 'w-full max-w-sm border border-neutral-300 dark:border-neutral-700'

const ScrollAreaDocumentation = () => {
    return (
        <DocPage title='Scroll area' description='A scrollable box with slim bars drawn by the library, so they look the same in every browser and operating system. The content still scrolls with the wheel, touch and the keyboard.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Give it a height with `className`. The bar shows while the pointer is over the area or the content moves. Drag the thumb or click the track.' file={file}>
                <ScrollArea className={`h-64 ${boxed}`} label='Versions'>
                    <List />
                </ScrollArea>
            </Variant>

            <Variant title='Horizontal' description='`orientation="horizontal"` scrolls sideways, for example for a row of cards.' file={file}>
                <ScrollArea orientation='horizontal' className={boxed} label='Gallery'>
                    <div className='flex gap-3 p-3 pb-5'>
                        {Array.from({ length: 10 }, (_, index) => (
                            <div key={index} className='h-24 w-32 shrink-0 rounded-xl bg-gradient-to-br from-pink-300 to-purple-400 opacity-80' />
                        ))}
                    </div>
                </ScrollArea>
            </Variant>

            <Variant title='Both directions' description='`orientation="both"` shows two bars that leave the corner free.' file={file}>
                <ScrollArea orientation='both' className={`h-48 ${boxed}`} label='Wide table'>
                    <table className='w-max text-sm text-neutral-700 dark:text-neutral-300'>
                        <tbody>
                            {Array.from({ length: 14 }, (_, row) => (
                                <tr key={row} className='border-b border-neutral-200 dark:border-neutral-700'>
                                    {Array.from({ length: 10 }, (_, column) => <td key={column} className='whitespace-nowrap px-4 py-2'>Row {row + 1}, column {column + 1}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ScrollArea>
            </Variant>

            <Variant title='Always visible' description='`visibility="always"` keeps the bar on screen. `scroll` shows it only while the content moves.' file={file} previewClassName='flex flex-wrap gap-6'>
                <ScrollArea visibility='always' className={`h-40 w-56 ${boxed}`} label='Always visible'>
                    <List />
                </ScrollArea>
                <ScrollArea visibility='scroll' className={`h-40 w-56 ${boxed}`} label='Only while scrolling'>
                    <List />
                </ScrollArea>
            </Variant>

            <Variant title='Custom color' description='Use `color` for the thumb while you drag it. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <ScrollArea color='#0f766e' visibility='always' className={`h-40 ${boxed}`} label='Teal'>
                    <List />
                </ScrollArea>
            </Variant>
        </DocPage>
    )
}

export default ScrollAreaDocumentation
