import { useEffect } from "react";
import { ArrowRight, Sparkles, Copy, Moon, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import Explanation from "../Explanation/Explanation";
import Characteristics from "../Characteristics/Characteristics";
import ComponentsSection from "../ComponentsSection/ComponentsSection";
import Footer from "../Footer/Footer";
import HeroComponents from "../HeroComponents/HeroComponents";
import Marquee from "./Marquee";
import CallToAction from "./CallToAction";
import { components } from "../../mocks/docs";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const stats = [
  { icon: Copy, value: `${components.length}+`, label: "Components" },
  { icon: Gift, value: "100%", label: "Free & open source" },
  { icon: Moon, value: "Dark", label: "Mode included" },
];

const Home = () => {
  useEffect(() => {
    document.title = "Blossom UI - Components made with Tailwind";
  }, []);
  return (
    <>
      {/* Decorative glow behind the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[800px] overflow-hidden">
        <div className="float-slow absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-corporative opacity-25 blur-3xl dark:opacity-20" />
        <div className="float-slower absolute top-40 right-1/4 h-96 w-96 rounded-full bg-purple-400 opacity-20 blur-3xl dark:opacity-15" />
      </div>

      <main className="relative z-10 grid grid-cols-2 items-center gap-8 pt-52 lg:flex lg:flex-col lg:items-start lg:gap-12 lg:pt-32">
        <section className="fade-up flex flex-col gap-6">
          <span className="flex items-center gap-2 font-medium h-fit w-fit text-sm px-4 py-2 rounded-full border border-corporative/40 bg-corporative/10 text-corporativeHover cursor-default dark:text-corporative">
            <Sparkles size={14} />
            Now with dark mode
          </span>
          <h1 className="text-6xl font-bold text-neutral-800 tracking-tight dark:text-white xs:text-5xl">
            Your next project, in record time with <span className="text-gradient">Blossom UI</span>.
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Customizable, reusable and beautiful components made with Tailwind. Copy, paste and ship.
          </p>
          <div className="flex gap-4 sm:flex-col">
            <Link
              to="/docs/getting-started/introduction"
              className="group flex justify-center items-center bg-corporative text-white w-fit h-fit text-sm gap-2 px-5 py-3 rounded-lg font-medium select-none shadow-lg shadow-corporative/30 hover:bg-corporativeHover hover:-translate-y-0.5 duration-200 sm:w-full"
              onClick={scrollTop}
            >
              Get started
              <ArrowRight size={18} className="group-hover:translate-x-1 duration-200" />
            </Link>
            <Link
              to="/components"
              className="flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-5 py-[11px] rounded-lg font-medium select-none hover:border-corporative hover:text-corporative duration-200 dark:border-neutral-700 dark:text-white dark:hover:border-corporative dark:hover:text-corporative sm:w-full"
              onClick={scrollTop}
            >
              Explore components
            </Link>
          </div>
          <dl className="flex gap-8 pt-4 sm:gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col">
                <dt className="flex items-center gap-1 text-2xl font-bold text-neutral-800 dark:text-white">
                  <Icon size={18} className="text-corporative" />
                  {value}
                </dt>
                <dd className="text-sm text-neutral-500">{label}</dd>
              </div>
            ))}
          </dl>
        </section>
        <HeroComponents />
      </main>

      <Marquee />
      <Characteristics />
      <Explanation />
      <ComponentsSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
