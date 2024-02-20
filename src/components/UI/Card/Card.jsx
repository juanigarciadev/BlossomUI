export const DefaultCard = () => {
  return (
    <section className="flex flex-col gap-4 w-80 h-auto bg-neutral-200 bg-opacity-40 border border-neutral-300 rounded-lg p-8 shadow-sm dark:bg-neutral-800 dark:border-neutral-600">
      <div className="flex justify-center items-center bg-pink-400 rounded-full w-10 h-10">
        <svg
          className="text-white"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4" />
          <path
            fill="currentColor"
            d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8"
          />
          <path
            fill="currentColor"
            d="m8.535 12.634l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.488 1.488 0 0 0-2.067.068c-.586.6-.579 1.53.019 2.117zm7 0l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.488 1.488 0 0 0-2.068.067c-.586.6-.579 1.53.019 2.117z"
          />
        </svg>
      </div>
      <h3 className="text-black text-2xl font-bold dark:text-white">
        Customizable
      </h3>
      <p className="text-neutral-800 text-sm dark:text-neutral-300">
        Highly customizable, just modify the Tailwind tags and voilà!
      </p>
    </section>
  );
};
