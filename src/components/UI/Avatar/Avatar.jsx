export const StackedAvatar = () => {
    return (
        <div className='flex -space-x-4'>
            <img className='bg-neutral-200 w-10 h-10 rounded-full border-2 border-white dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg'></img>
            <img className='bg-neutral-200 w-10 h-10 rounded-full border-2 border-white dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg'></img>
            <img className='bg-neutral-200 w-10 h-10 rounded-full border-2 border-white dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg'></img>
            <img className='bg-neutral-200 w-10 h-10 rounded-full border-2 border-white dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg'></img>
            <a className='flex items-center justify-center text-sm font-medium bg-neutral-200 w-10 h-10 rounded-full border-2 border-white cursor-pointer select-none hover:bg-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-600'>+99</a>
        </div>
    )
}

export const CircularAvatar = () => {
    return (
        <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
    )
}

export const CircularAvatarOnlineTop = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
            <span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const CircularAvatarOnlineBottom = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
            <span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const CircularAvatarDoNotDisturbTop = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
            <span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const CircularAvatarDoNotDisturbBottom = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
            <span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const RoundedEdgesAvatar = () => {
    return (
        <img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Rounded edges avatar"></img>
    )
}

export const RoundedEdgesAvatarOnlineTop = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Online"></img>
            <span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const RoundedEdgesAvatarOnlineBottom = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Online"></img>
            <span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const RoundedEdgesAvatarDoNotDisturbTop = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Do not disturb"></img>
            <span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}

export const RoundedEdgesAvatarDoNotDisturbBottom = () => {
    return (
        <div className="relative">
            <img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Do not disturb"></img>
            <span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span>
        </div>
    )
}


export const Placeholder = () => {
    return (
        <div className='relative overflow-hidden bg-neutral-200 w-10 h-10 rounded-full dark:bg-neutral-600'>
            <svg className='absolute w-12 h-12 text-neutral-400 -left-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'></path></svg>
        </div>
    )
}

export const Initials = () => {
    return (
        <div className='relative flex items-center justify-center bg-neutral-200 w-10 h-10 rounded-full dark:bg-neutral-600'>
            <span className="font-medium text-neutral-600 dark:text-neutral-300">UI</span>
        </div>
    )
}

export const InformationAvatar = () => {
    return (
        <div className="flex gap-3">
            <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
            <div className="flex flex-col -gap-1">
                <p className="font-medium">Katherine Hoffman</p>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Active now</span>
            </div>
        </div>
    )
}
