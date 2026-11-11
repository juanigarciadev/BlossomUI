import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Resizable/Resizable.tsx?raw'
import { ResizablePanels } from '../../../UI/Resizable/Resizable'

const file = 'src/components/UI/Resizable/Resizable.tsx'

const Pane = ({ title, children }) => (
    <div className='flex h-full flex-col gap-1 p-4 text-sm text-neutral-600 dark:text-neutral-300'>
        <span className='font-medium text-neutral-900 dark:text-white'>{title}</span>
        {children}
    </div>
)

const SizesDemo = () => {
    const [sizes, setSizes] = useState([30, 70])
    return (
        <div className='flex w-full flex-col gap-3'>
            <ResizablePanels
                className='h-48'
                onResize={setSizes}
                panels={[
                    { id: 'files', defaultSize: 30, minSize: 15, maxSize: 50, content: <Pane title='Files'>Between 15% and 50%</Pane> },
                    { id: 'editor', content: <Pane title='Editor'>The rest</Pane> },
                ]}
            />
            <p className='text-sm text-neutral-500'>Files {Math.round(sizes[0])}% · Editor {Math.round(sizes[1])}%</p>
        </div>
    )
}

const sizesCode = `const [sizes, setSizes] = useState([30, 70])

<ResizablePanels
  className="h-48"
  onResize={setSizes}
  panels={[
    { id: 'files', defaultSize: 30, minSize: 15, maxSize: 50, content: <Files /> },
    { id: 'editor', content: <Editor /> },
  ]}
/>`

const ResizableDocumentation = () => {
    return (
        <DocPage title='Resizable panels' description='Panels separated by a handle that you drag. From the keyboard, focus the handle and use the arrow keys. Give the group a height with `className`.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Two panels side by side. Drag the handle, or focus it with Tab and press the arrow keys (Shift moves faster, Home and End go to the limits).' file={file}>
                <ResizablePanels
                    className='h-48'
                    panels={[
                        { id: 'inbox', defaultSize: 40, content: <Pane title='Inbox'>Your messages are here.</Pane> },
                        { id: 'message', content: <Pane title='Message'>Pick a message to read it.</Pane> },
                    ]}
                />
            </Variant>

            <Variant title='Three panels' description='Every handle moves the border between its two neighbors. Panels without a `defaultSize` share the space that is left.' file={file}>
                <ResizablePanels
                    className='h-48'
                    panels={[
                        { id: 'nav', defaultSize: 20, minSize: 10, content: <Pane title='Navigation' /> },
                        { id: 'main', content: <Pane title='Content'>The main area</Pane> },
                        { id: 'aside', defaultSize: 25, minSize: 10, content: <Pane title='Details' /> },
                    ]}
                />
            </Variant>

            <Variant title='Vertical' description='`direction="vertical"` stacks the panels.' file={file}>
                <ResizablePanels
                    direction='vertical'
                    className='h-72'
                    panels={[
                        { id: 'code', defaultSize: 60, content: <Pane title='Code'>const hello = 'world'</Pane> },
                        { id: 'console', content: <Pane title='Console'>No errors</Pane> },
                    ]}
                />
            </Variant>

            <Variant title='Limits and sizes' description='`minSize` and `maxSize` are percentages. `onResize` receives the size of every panel while the user drags.' file={file} code={sizesCode}>
                <SizesDemo />
            </Variant>

            <Variant title='Without a grip' description='`withHandle={false}` leaves only the line.' file={file}>
                <ResizablePanels
                    withHandle={false}
                    className='h-32'
                    panels={[
                        { id: 'a', defaultSize: 50, content: <Pane title='A' /> },
                        { id: 'b', content: <Pane title='B' /> },
                    ]}
                />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the handle while it is hovered, focused or dragged. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <ResizablePanels
                    color='#0f766e'
                    className='h-32'
                    panels={[
                        { id: 'a', defaultSize: 50, content: <Pane title='A' /> },
                        { id: 'b', content: <Pane title='B' /> },
                    ]}
                />
            </Variant>
        </DocPage>
    )
}

export default ResizableDocumentation
