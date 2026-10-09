import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { components } from "../../mocks/docs";
import ComponentSkeleton from "./ComponentSkeletons";

const ComponentsSection = () => {
  return (
    <div className="pt-8 lg:pt-16">
      <h3 className="text-6xl font-bold text-neutral-800 tracking-tight dark:text-white pb-8 text-center">
        Components
      </h3>
      <section className="grid grid-cols-3 gap-4 pb-24 lg:grid-cols-2 md:grid-cols-1">
        {components.map((card) => {
          return (
            <Link
              to={card.url}
              key={card.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 hover:border-corporative hover:shadow-md duration-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-corporative"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="flex items-center justify-center h-44 p-6 bg-white bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#222222] dark:bg-[radial-gradient(#333_1px,transparent_1px)]">
                <div className="flex w-full justify-center animate-pulse group-hover:animate-none">
                  <ComponentSkeleton name={card.name} />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3 dark:border-neutral-700 dark:text-white">
                <h3 className="font-medium">{card.name}</h3>
                <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-corporative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default ComponentsSection;
