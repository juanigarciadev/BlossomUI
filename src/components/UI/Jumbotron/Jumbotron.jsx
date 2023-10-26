export const DefaultJumbotron = () => {
  return (
    <div className="w-full h-full">
        <section className="grid gap-6 py-32">
            <h1 className="text-5xl font-bold text-center md:text-4xl">Completely free and easy to use.</h1>
            <h3 className="text-center text-neutral-700 dark:text-neutral-300">Customizable, reusable and beautiful components made with Tailwind.</h3>
            <div className="flex justify-center gap-2 md:flex-col">
                <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-1 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800 md:w-full'>Get started<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg></button>
                <button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md md:w-full dark:text-white dark:hover:bg-neutral-800'>Learn more</button>
            </div>
        </section>
    </div>
  )
}

export const BackgroundImageJumbotron = () => {
    return (
      <div className="w-full h-full">
          <section className="grid gap-6 py-32 bg-neutral-500 bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1698362153/lake_zmcuam.jpg')] bg-center bg-no-repeat bg-blend-multiply">
              <h1 className="text-5xl font-bold text-center text-white md:text-4xl">Completely free and easy to use.</h1>
              <h3 className="text-center text-neutral-300">Customizable, reusable and beautiful components made with Tailwind.</h3>
              <div className="flex justify-center gap-2 md:flex-col">
                  <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-1 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800 md:w-full'>Get started<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg></button>
                  <button className='flex justify-center items-center text-center text-white border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-white hover:text-black md:w-full'>Learn more</button>
              </div>
          </section>
      </div>
    )
  }
