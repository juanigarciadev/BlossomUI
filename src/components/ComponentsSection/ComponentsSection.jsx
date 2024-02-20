import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { components } from "../../mocks/docs";

const ComponentsSection = () => {
  return (
    <div className="lg:pt-32">
      <h3 className="text-6xl font-bold text-neutral-800 tracking-tight dark:text-white pb-8 text-center">
        Components
      </h3>
      <section className="grid grid-cols-3 gap-4 pb-32 md:flex lg:grid-cols-2 md:flex-col">
        {components.map((card) => {
          return (
            <Link
              to={card.url}
              key={card.name}
              className="flex flex-col border border-neutral-300 w-full h-auto rounded-lg shadow-sm hover:shadow-md duration-300 dark:border-transparent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="flex items-center justify-between rounded-t-lg py-2 px-4 bg-neutral-300 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white">
                <h3 className="font-bold">{card.name}</h3>
                <BiLinkExternal />
              </div>
              <hr />
              <img src={card.img} className="rounded-b-lg" alt={card.name} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default ComponentsSection;
