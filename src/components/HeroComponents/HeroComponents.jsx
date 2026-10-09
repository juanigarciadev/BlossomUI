import { useState } from 'react'
import { SocialButton } from '../UI/Buttons/Button'
import { AvatarGroup } from '../UI/Avatar/Avatar'
import { Checkbox, RadioGroup, Select } from '../UI/Forms/Forms'
import { Rating } from '../UI/Rating/Rating'
import { SimplePagination } from '../UI/Pagination/Pagination'
import { Skeleton } from '../UI/Skeleton/Skeleton'
import { StepperProgress } from '../UI/Stepper/Stepper'
import { Appear } from '../Motion/Motion'

const photos = [
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg',
]

/** The progress bar and the pagination share the same page, so both always say the same thing. */
const StepsDemo = () => {
    const [page, setPage] = useState(3)
    return (
        <>
            <StepperProgress total={4} current={page - 1} />
            <div className='flex justify-end'>
                <SimplePagination page={page} total={4} onChange={setPage} />
            </div>
        </>
    )
}

const Panel = ({ className = '', children }) => (
    <div className={`flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-xl shadow-neutral-200/50 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/60 dark:shadow-none ${className}`}>
        {children}
    </div>
)

const HeroComponents = () => {
    return (
        <Appear as='section' delay={0.1} y={24} className='relative flex w-full flex-col gap-4 lg:items-start'>
            <Panel className='float-slow'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                    <AvatarGroup avatars={photos.map((src) => ({ src }))} max={3} />
                    <Rating value={5} />
                    <div className='flex items-center gap-3'>
                        <SocialButton provider='google' iconOnly rounded />
                        <SocialButton provider='github' iconOnly rounded />
                        <SocialButton provider='apple' iconOnly rounded />
                    </div>
                </div>
                <RadioGroup
                    name='hero-plan'
                    direction='horizontal'
                    defaultValue='monthly'
                    options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]}
                />
            </Panel>
            <Panel className='float-slower ml-10 lg:ml-0'>
                <div className='flex flex-wrap items-end gap-4'>
                    <div className='min-w-[10rem] flex-1'>
                        <Select
                            placeholder='Select a color'
                            options={[{ value: 'pink', label: 'Pink' }, { value: 'purple', label: 'Purple' }, { value: 'blue', label: 'Blue' }]}
                        />
                    </div>
                    <Checkbox label='Remember me' defaultChecked />
                </div>
                <div className='flex items-center gap-4'>
                    <Skeleton className='h-10 w-10 shrink-0' />
                    <div className='flex flex-1 flex-col gap-2'>
                        <Skeleton className='h-3 w-2/3' />
                        <Skeleton className='h-3 w-1/2' />
                    </div>
                </div>
            </Panel>
            <Panel className='float-slow ml-4 lg:ml-0'>
                <StepsDemo />
            </Panel>
        </Appear>
    )
}

export default HeroComponents
