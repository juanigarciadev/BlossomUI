import characteristics from "../../mocks/characteristics";

const Characteristics = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full h-auto pt-64 lg:grid-cols-2 md:grid-cols-1 lg:pt-32">
      {characteristics.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="flex flex-col gap-2 p-4 rounded-xl border border-neutral-200 bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700"
          >
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-corporative bg-opacity-20 text-corporative">
              <Icon size={20} />
            </span>
            <h3 className="font-medium text-lg text-neutral-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {item.subtitle}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Characteristics;
