import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../Motion/Motion";

const CallToAction = () => {
  return (
    <FadeIn as="section" className="relative mb-16 w-full overflow-hidden rounded-3xl border border-corporative/30 bg-gradient-to-br from-pink-50 via-white to-purple-50 px-8 py-16 text-center dark:border-neutral-700 dark:bg-none dark:bg-neutral-800 sm:px-4">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-corporative opacity-30 blur-3xl dark:opacity-40" />
      <div className="relative flex flex-col items-center gap-6">
        <h2 className="text-5xl font-bold tracking-tight text-neutral-800 dark:text-white md:text-4xl">
          Ready to make your project <span className="text-gradient">bloom</span>?
        </h2>
        <p className="max-w-xl text-neutral-600 dark:text-neutral-300">
          Pick a component, copy the code and make it yours. No installs, no lock-in, just Tailwind.
        </p>
        <Link
          to="/docs/getting-started/introduction"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 rounded-lg bg-corporative px-6 py-3 font-medium text-white shadow-lg shadow-corporative/30 hover:bg-corporativeHover hover:-translate-y-0.5 duration-200"
        >
          Start building
          <ArrowRight size={18} className="group-hover:translate-x-1 duration-200" />
        </Link>
      </div>
    </FadeIn>
  );
};

export default CallToAction;
