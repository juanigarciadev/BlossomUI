import { useState } from 'react'
import { BarChart3, FolderKanban, Home, Inbox, LifeBuoy, Settings, Users } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Sidebar/Sidebar.tsx?raw'
import { Sidebar } from '../../../UI/Sidebar/Sidebar'
import { Avatar } from '../../../UI/Avatar/Avatar'

const file = 'src/components/UI/Sidebar/Sidebar.tsx'

const icon = (Icon) => <Icon size={18} />

const sections = [
    {
        items: [
            { id: 'home', label: 'Home', icon: icon(Home) },
            { id: 'inbox', label: 'Inbox', icon: icon(Inbox), badge: 12 },
            { id: 'projects', label: 'Projects', icon: icon(FolderKanban), children: [{ id: 'website', label: 'Website' }, { id: 'mobile', label: 'Mobile app' }, { id: 'api', label: 'API' }] },
            { id: 'reports', label: 'Reports', icon: icon(BarChart3) },
        ],
    },
    {
        title: 'Workspace',
        items: [
            { id: 'team', label: 'Team', icon: icon(Users) },
            { id: 'settings', label: 'Settings', icon: icon(Settings) },
            { id: 'help', label: 'Help', icon: icon(LifeBuoy), disabled: true },
        ],
    },
]

const brand = (collapsed) => (
    <div className='flex items-center gap-2'>
        <span className='grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-corporative text-sm font-bold text-white'>B</span>
        {!collapsed && <span className='font-semibold text-neutral-900 dark:text-white'>Acme</span>}
    </div>
)

const user = (collapsed) => (
    <div className='flex items-center gap-3'>
        <Avatar name='Ana Martínez' size='sm' />
        {!collapsed && (
            <div className='flex min-w-0 flex-col'>
                <span className='truncate text-sm font-medium text-neutral-900 dark:text-white'>Ana Martínez</span>
                <span className='truncate text-xs text-neutral-500'>ana@acme.com</span>
            </div>
        )}
    </div>
)

const frame = 'flex w-full justify-start'

const NavigationDemo = () => {
    const [active, setActive] = useState('inbox')
    return (
        <div className='flex w-full flex-wrap items-start gap-6'>
            <Sidebar className='h-[30rem]' sections={sections} activeId={active} onNavigate={setActive} header={brand} footer={user} />
            <p className='text-sm text-neutral-500'>Current page: <span className='font-medium text-neutral-800 dark:text-neutral-200'>{active}</span></p>
        </div>
    )
}

const navigationCode = `const [active, setActive] = useState('inbox')

<Sidebar
  className="h-[30rem]"
  sections={sections}
  activeId={active}
  onNavigate={setActive}
  header={(collapsed) => <Logo compact={collapsed} />}
  footer={(collapsed) => <User compact={collapsed} />}
/>`

const SidebarDocumentation = () => {
    return (
        <DocPage title='Sidebar' description='Side navigation with groups, nested items, badges and a collapsed mode that keeps only the icons, with a tooltip for each. Give it a height with `className`.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='The `header` and `footer` can be a function that receives `collapsed`, so you can show only the logo or the avatar. Open Projects, or collapse the bar with the arrow.' file={file} code={navigationCode}>
                <NavigationDemo />
            </Variant>

            <Variant title='Collapsed' description='`defaultCollapsed` starts it as a bar of icons. Hover an icon to read its name. A group opens the bar again, because there is no room for its items.' file={file} previewClassName={frame}>
                <Sidebar className='h-[28rem]' sections={sections} defaultCollapsed activeId='reports' header={brand} />
            </Variant>

            <Variant title='Without the collapse button' description='`collapsible={false}` removes the button, for a sidebar that is always open.' file={file} previewClassName={frame}>
                <Sidebar className='h-72' collapsible={false} sections={[{ title: 'Menu', items: sections[0].items.slice(0, 2).concat(sections[1].items.slice(0, 1)) }]} activeId='home' />
            </Variant>

            <Variant title='Links' description='An item with `href` renders an `a`, so it works with a router or a plain page.' file={file} previewClassName={frame}>
                <Sidebar
                    className='h-48'
                    collapsible={false}
                    activeId='docs'
                    sections={[{ items: [{ id: 'docs', label: 'Docs', href: '#sidebar', icon: icon(Home) }, { id: 'blog', label: 'Blog', href: '#sidebar', icon: icon(Inbox) }] }]}
                />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the active item and the focus rings. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName={frame}>
                <Sidebar className='h-72' color='#0f766e' collapsible={false} activeId='inbox' sections={[sections[0]]} />
            </Variant>
        </DocPage>
    )
}

export default SidebarDocumentation
