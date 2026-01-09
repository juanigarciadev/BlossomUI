const CompVersionTitle = ({ title, paragraph }) => {

    const id = title.replaceAll(' ', '').toLowerCase()
    return (
        <div className='pb-4'>
            <a href={`#${id}`} className="group flex items-center gap-3">
                <h3 className='text-lg font-medium scroll-mt-24' id={id}>{title}</h3>
                <h3 className="text-neutral-500 opacity-0 group-hover:opacity-100 duration-200">#</h3>
            </a>
            <p className='dark:text-neutral-300'>{paragraph}</p>
        </div>
    )
}

export default CompVersionTitle