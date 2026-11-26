/* eslint-disable react/prop-types */
import { CopyButton } from '../UI/CopyButton/CopyButton'
import { SITE } from '../../mocks/seo'

export const INSTALL_COMMAND = `npm install ${SITE.package}`

/** A terminal line with a button to copy it. By default, the command that installs the library. */
const InstallCommand = ({ command = INSTALL_COMMAND, className = '' }) => (
    <div className={`flex w-full max-w-lg items-center gap-3 rounded-xl border border-corporative/40 bg-white/80 py-2 pl-4 pr-2 shadow-sm backdrop-blur dark:bg-neutral-900/80 ${className}`}>
        <span aria-hidden className='select-none font-mono text-sm text-corporative'>$</span>
        <code className='min-w-0 flex-1 overflow-x-auto whitespace-nowrap py-1 text-sm text-neutral-800 [scrollbar-width:none] dark:text-neutral-100' style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" }}>
            {command}
        </code>
        <CopyButton text={command} variant='icon' size='sm' label='Copy command' />
    </div>
)

export default InstallCommand
