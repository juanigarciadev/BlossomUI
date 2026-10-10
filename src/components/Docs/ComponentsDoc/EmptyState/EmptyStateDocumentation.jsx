import { Inbox, Search } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/EmptyState/EmptyState.tsx?raw'
import { EmptyState } from '../../../UI/EmptyState/EmptyState'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/EmptyState/EmptyState.tsx'

const EmptyStateDocumentation = () => {
    return (
        <DocPage title='Empty state' description='Tell the user why there is nothing to show and what they can do about it.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='An icon, a title, a short description and an action.' file={file} previewClassName='flex w-full'>
                <EmptyState
                    icon={<Inbox size={22} />}
                    title='No messages yet'
                    description='When someone writes to you, the conversation will show up here.'
                    action={<Button>Write a message</Button>}
                />
            </Variant>

            <Variant title='Bordered' description='A dashed border works well for drop zones and empty lists.' file={file} previewClassName='flex w-full'>
                <EmptyState
                    bordered
                    icon={<Search size={22} />}
                    title='No results'
                    description='Try a different search term or remove some filters.'
                    action={<Button color='secondary'>Clear filters</Button>}
                />
            </Variant>

            <Variant title='Minimal' description='Without icon and action.' file={file} previewClassName='flex w-full'>
                <EmptyState title='Nothing here' description='Come back later.' />
            </Variant>
        </DocPage>
    )
}

export default EmptyStateDocumentation
