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
