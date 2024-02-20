import React, { useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Explanation from "../Explanation/Explanation";
import Characteristics from "../Characteristics/Characteristics";
import ComponentsSection from "../ComponentsSection/ComponentsSection";
import Footer from "../Footer/Footer";
import ComponentsExample from "../ComponentsExample/ComponentsExample";

const Home = () => {
  useEffect(() => {
    document.title = "Blossom UI - Components made with Tailwind";
  }, []);
  return (
    <>
      <main className="grid grid-cols-2 pt-64 lg:flex lg:flex-col lg:gap-12 home lg:pt-32">
        <section className="flex flex-col gap-6">
          <span
            id="badge-dismiss-default"
            className="flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-neutral-100 text-neutral-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-neutral-300"
          >
            Now with dark mode! 🌙
          </span>
          <h1 className="text-6xl font-bold text-neutral-800 tracking-tight dark:text-white">
            Your next project, in record time with{" "}
            <span className="text-corporative">Blossom UI</span>.
          </h1>
          <h3 className="text-lg text-neutral-700 dark:text-neutral-300">
            Customizable, reusable and beautiful components made with Tailwind.
          </h3>
          <section className="flex gap-4 sm:flex-col">
            <Link
              to="/docs/getting-started/introduction"
              className="flex justify-center items-center bg-black text-white w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 sm:w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Get started
              <BiRightArrowAlt className="text-2xl" />
            </Link>
            <Link
              to="/components"
              className="flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore components
              <BiRightArrowAlt className="text-2xl" />
            </Link>
          </section>
        </section>
        <ComponentsExample />
      </main>
      <Characteristics />
      <Explanation />
      <ComponentsSection />
      <Footer />
    </>
  );
};

export default Home;
