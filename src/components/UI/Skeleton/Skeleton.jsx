export const DefaultSkeleton = () => {
  return (
    <div className="animate-pulse">
        <div className="w-40 h-4 mb-4 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-60 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-72 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-52 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-64 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-80 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-48 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
    </div>
  )
}

export const ImageSkeleton = () => {
  return (
    <div className="flex items-center gap-4 animate-pulse w-full">
        <div className="flex items-center justify-center w-64 h-64 rounded bg-neutral-300 dark:bg-neutral-700">
            <svg class="w-10 h-10 text-neutral-400 dark:text-neutral-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div>
            <div className="w-40 h-4 mb-4 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            <div className="w-60 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            <div className="w-72 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            <div className="w-52 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            <div className="w-64 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            <div className="w-80 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            <div className="w-48 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        </div>
    </div>
  )
}

