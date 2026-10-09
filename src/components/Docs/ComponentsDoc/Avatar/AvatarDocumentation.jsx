import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import avatarSource from '../../../UI/Avatar/Avatar.jsx?raw'
import {
    CircularAvatar, RoundedEdgesAvatar,
    CircularAvatarOnlineTop, CircularAvatarOnlineBottom, CircularAvatarDoNotDisturbTop, CircularAvatarDoNotDisturbBottom,
    RoundedEdgesAvatarOnlineTop, RoundedEdgesAvatarOnlineBottom, RoundedEdgesAvatarDoNotDisturbTop, RoundedEdgesAvatarDoNotDisturbBottom,
    CircularRingAvatarOnline, CircularRingAvatarOffline, CircularRingAvatarBusy,
    RoundedEdgesRingAvatarOnline, RoundedEdgesRingAvatarOffline, RoundedEdgesRingAvatarBusy,
    StackedAvatar, InformationAvatar, Placeholder, Initials,
} from '../../../UI/Avatar/Avatar'

const file = 'src/components/UI/Avatar/Avatar.jsx'

const AvatarDocumentation = () => {
    return (
        <DocPage title='Avatar'>
            <Variant title='Avatar' description="Shows the user's profile image with different rounded edges." source={avatarSource} file={file}
                exports={['CircularAvatar', 'RoundedEdgesAvatar']}>
                <CircularAvatar />
                <RoundedEdgesAvatar />
            </Variant>

            <Variant title='Dot status indicator' description="Shows the user's activity status with a colored circle in the avatar." source={avatarSource} file={file}
                previewClassName='flex flex-col gap-4'
                exports={['CircularAvatarOnlineTop', 'CircularAvatarOnlineBottom', 'CircularAvatarDoNotDisturbTop', 'CircularAvatarDoNotDisturbBottom', 'RoundedEdgesAvatarOnlineTop', 'RoundedEdgesAvatarOnlineBottom', 'RoundedEdgesAvatarDoNotDisturbTop', 'RoundedEdgesAvatarDoNotDisturbBottom']}>
                <div className='flex gap-4'>
                    <CircularAvatarOnlineTop />
                    <CircularAvatarOnlineBottom />
                    <CircularAvatarDoNotDisturbTop />
                    <CircularAvatarDoNotDisturbBottom />
                </div>
                <div className='flex gap-4'>
                    <RoundedEdgesAvatarOnlineTop />
                    <RoundedEdgesAvatarOnlineBottom />
                    <RoundedEdgesAvatarDoNotDisturbTop />
                    <RoundedEdgesAvatarDoNotDisturbBottom />
                </div>
            </Variant>

            <Variant title='Ring status indicator' description="Shows the user's activity status with a colored ring outlining the avatar." source={avatarSource} file={file}
                previewClassName='flex flex-col gap-4'
                exports={['CircularRingAvatarOnline', 'CircularRingAvatarOffline', 'CircularRingAvatarBusy', 'RoundedEdgesRingAvatarOnline', 'RoundedEdgesRingAvatarOffline', 'RoundedEdgesRingAvatarBusy']}>
                <div className='flex gap-4'>
                    <CircularRingAvatarOnline />
                    <CircularRingAvatarOffline />
                    <CircularRingAvatarBusy />
                </div>
                <div className='flex gap-4'>
                    <RoundedEdgesRingAvatarOnline />
                    <RoundedEdgesRingAvatarOffline />
                    <RoundedEdgesRingAvatarBusy />
                </div>
            </Variant>

            <Variant title='Stacked' description='Use the stacked variant to display a group of users.' source={avatarSource} file={file} exports='StackedAvatar'>
                <StackedAvatar />
            </Variant>

            <Variant title='With information' description="Show the user's name and status next to the avatar." source={avatarSource} file={file} exports='InformationAvatar'>
                <InformationAvatar />
            </Variant>

            <Variant title='Placeholder' description='Use this variant for users who do not have a profile image.' source={avatarSource} file={file} exports='Placeholder'>
                <Placeholder />
            </Variant>

            <Variant title='With initials' description="Show the user's initials if they have not added a profile image and you do not like the placeholder variant." source={avatarSource} file={file} exports='Initials'>
                <Initials />
            </Variant>
        </DocPage>
    )
}

export default AvatarDocumentation
