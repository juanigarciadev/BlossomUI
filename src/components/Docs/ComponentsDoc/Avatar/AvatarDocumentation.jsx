import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Avatar/Avatar.tsx?raw'
import { Avatar, AvatarGroup, AvatarInfo } from '../../../UI/Avatar/Avatar'

const file = 'src/components/UI/Avatar/Avatar.tsx'

const people = [
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg',
]
const photo = people[0]

const group = people.map((src) => ({ src }))
const crowd = [...group, ...group, ...group]

const AvatarDocumentation = () => {
    return (
        <DocPage title='Avatar' description="Show the user's profile image, initials or a placeholder, with an optional status.">
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description="Shows the user's profile image with a circle or rounded corners." file={file}>
                <Avatar src={photo} alt='Katherine Hoffman' />
                <Avatar src={photo} alt='Katherine Hoffman' square />
            </Variant>

            <Variant title='Sizes' description='Use the size prop: sm, md, lg and xl.' file={file} previewClassName='flex flex-wrap items-center gap-4'>
                <Avatar src={photo} size='sm' />
                <Avatar src={photo} size='md' />
                <Avatar src={photo} size='lg' />
                <Avatar src={photo} size='xl' />
            </Variant>

            <Variant title='Dot status indicator' description="Shows the user's activity status with a colored circle in a corner." file={file} previewClassName='flex flex-wrap items-center gap-4'>
                <Avatar src={photo} status='online' />
                <Avatar src={photo} status='online' statusPosition='bottom' />
                <Avatar src={photo} status='busy' />
                <Avatar src={photo} status='away' square />
                <Avatar src={photo} status='offline' square statusPosition='bottom' />
            </Variant>

            <Variant title='Ring status indicator' description="Shows the user's activity status with a colored ring outlining the avatar." file={file} previewClassName='flex flex-wrap items-center gap-4'>
                <Avatar src={photo} status='online' statusStyle='ring' />
                <Avatar src={photo} status='busy' statusStyle='ring' />
                <Avatar src={photo} status='away' statusStyle='ring' square />
                <Avatar src={photo} status='offline' statusStyle='ring' square />
            </Variant>

            <Variant title='Stacked' description='Use the group to display several users. The rest is collapsed into a counter.' file={file} previewClassName='flex flex-col gap-4'>
                <AvatarGroup avatars={group} />
                <AvatarGroup avatars={crowd} max={4} />
            </Variant>

            <Variant title='With information' description="Show the user's name and status next to the avatar." file={file} previewClassName='flex flex-wrap gap-8'>
                <AvatarInfo src={photo} name='Katherine Hoffman' description='Active now' status='online' />
                <AvatarInfo initials='UI' name='Blossom UI' description='Joined in 2023' />
            </Variant>

            <Variant title='Placeholder' description='Used automatically for users who do not have a profile image, or when the image fails to load.' file={file}>
                <Avatar />
                <Avatar square />
                <Avatar src='https://invalid.example/missing.jpg' />
            </Variant>

            <Variant title='With initials' description="Show the user's initials if they have not added a profile image." file={file}>
                <Avatar initials='UI' />
                <Avatar initials='KH' size='lg' />
                <Avatar initials='JG' square status='online' />
            </Variant>
        </DocPage>
    )
}

export default AvatarDocumentation
