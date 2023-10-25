export const StackedAvatar = () => {
    return (
        <div className='flex -space-x-4'>
            <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg'></img>
            <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg'></img>
            <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg'></img>
            <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg'></img>
            <a className='flex items-center justify-center text-sm font-medium bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 cursor-pointer select-none hover:bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-600'>+99</a>
        </div>
    )
}

export const CircularAvatar = () => {
    return (
        <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img>
    )
}

export const RoundedEdgesAvatar = () => {
    return (
        <img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Rounded edges avatar"></img>
    )
}

export const Placeholder = () => {
    return (
        <div className='relative overflow-hidden bg-neutral-200 w-10 h-10 rounded-full dark:bg-neutral-600'>
            <svg class='absolute w-12 h-12 text-neutral-400 -left-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd'></path></svg>
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
