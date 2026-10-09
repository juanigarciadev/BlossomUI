import { components } from "../../mocks/docs";

/** Infinite strip with the name of every component; pauses on hover. */
const Marquee = () => {
  const names = components.map((c) => c.name);
  return (
    <div
      aria-hidden
      className="marquee relative mt-24 w-full overflow-hidden border-y border-neutral-200 py-4 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)] dark:border-neutral-800 lg:mt-16"
    >
      <div className="marquee-track flex w-max gap-10">
        {[...names, ...names].map((name, i) => (
          <span key={i} className="flex items-center gap-10 text-xl font-medium text-neutral-400 dark:text-neutral-600">
            {name}
            <span className="text-corporative">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
