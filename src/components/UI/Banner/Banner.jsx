export const DefaultBanner = () => {
  return (
    <div className="w-full">
      <div className="relative inline-flex w-full gap-2 top-0 justify-center items-center z-30 p-6 bg-neutral-100 border-y border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700">
        <span className="rounded-full p-1.5 bg-neutral-200 dark:bg-neutral-700">
          <svg
            className="text-neutral-600 dark:text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.658 8.658 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.344 9.344 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741M5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a4.723 4.723 0 0 1-.806-.115M17 4.741L14.655 6.11A11.343 11.343 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17zM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015l1.45.08zM19 10v2a1 1 0 0 0 .117-1.993z"
              />
            </g>
          </svg>
        </span>
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            We updated our{" "}
            <a href="" className="text-blue-500 underline hover:no-underline">
              Terms and Conditions
            </a>
          </span>
        </p>
        <div className="group absolute right-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded cursor-pointer p-2">
          <svg
            className="text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"
            />
          </svg>
        </div>
      </div>
      <div className="animate-pulse pt-4">
        <div className="w-80 h-4 mb-4 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-60 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-72 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-52 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-64 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-80 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="w-48 h-3 mb-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
      </div>
      <div className="flex items-center gap-4 animate-pulse w-full lg:flex-col lg:items-start">
        <div className="flex items-center justify-center w-96 h-64 rounded bg-neutral-300 dark:bg-neutral-700">
          <svg
            class="w-10 h-10 text-neutral-400 dark:text-neutral-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
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
    </div>
  );
};
