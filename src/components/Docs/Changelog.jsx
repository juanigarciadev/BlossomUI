import DocPage from './DocPage'

const releases = [
    {
        version: 'v1.0.0',
        date: 'October 9th, 2023',
        changes: ['Blossom UI now available, completely free and open source.'],
    },
]

const Changelog = () => {
    return (
        <DocPage title='Changelog' description='Every notable change to the library, newest first.'>
            <ol className='flex flex-col gap-8 border-l border-neutral-200 pl-6 dark:border-neutral-700'>
                {releases.map((release) => (
                    <li key={release.version} className='relative'>
                        <span className='absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-corporative' />
                        <h2 className='text-lg font-medium'>{release.version}</h2>
                        <span className='text-sm text-neutral-600 dark:text-neutral-500'>Released on {release.date}.</span>
                        <ul className='list-disc pt-3 pl-4'>
                            {release.changes.map((change) => (
                                <li key={change} className='text-neutral-600 dark:text-neutral-400'>{change}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </DocPage>
    )
}

export default Changelog
