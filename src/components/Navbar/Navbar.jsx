import { Suspense, useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Menu, Sun, Moon, X, Heart } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";
import { introduction, customization, components } from "../../mocks/docs";
import SearchPalette from "./SearchPalette";

const navLinks = [
  { name: "Docs", to: "/docs/getting-started/introduction", match: "/docs" },
  { name: "Components", to: "/components", match: "/components" },
];

const iconButton =
  "grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 text-neutral-700 hover:border-corporative hover:text-corporative duration-200 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-corporative dark:hover:text-corporative";

const Navbar = ({ mobileNavToggle, setMobileNavToggle }) => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const isMac = typeof navigator !== "undefined" && /Mac/i.test(navigator.platform);

  // Ctrl/Cmd + K opens the search from anywhere
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setMobileNavToggle(false), [pathname, setMobileNavToggle]);

  useEffect(() => {
    if (!mobileNavToggle) return;
    const onKey = (e) => e.key === "Escape" && setMobileNavToggle(false);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileNavToggle, setMobileNavToggle]);

  const ThemeIcon = theme === "" ? Moon : Sun;

  return (
    <>
      <motion.header initial={reduceMotion ? false : { opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: 0.05 }} className="fixed lg:absolute z-50 flex h-[70px] w-screen items-center justify-between gap-6 border-b border-neutral-200/70 bg-white/80 px-64 backdrop-blur-md transition-colors duration-300 xl:px-32 md:px-16 sm:px-8 dark:border-neutral-800 dark:bg-neutral-900/80">
        <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-white" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-corporative text-white shadow-md shadow-corporative/30">✿</span>
          Blossom <span className="-ml-1.5 text-corporative">UI</span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1 lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={() =>
                `rounded-xl px-3 py-2 text-sm font-medium duration-150 ${pathname.startsWith(link.match) ? "bg-corporative/10 text-corporative" : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        </div>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="mx-auto flex h-11 flex-1 max-w-xl items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-3 text-sm text-neutral-500 hover:border-corporative duration-200 dark:border-neutral-700 dark:bg-neutral-800 lg:max-w-none lg:flex-none lg:w-10 lg:justify-center lg:px-0"
          aria-label="Search docs"
        >
          <Search size={16} />
          <span className="flex-1 text-left lg:hidden">Search docs</span>
          <kbd className="rounded-xl border border-neutral-300 bg-white px-1.5 text-xs dark:border-neutral-600 dark:bg-neutral-900 lg:hidden">{isMac ? "⌘" : "Ctrl"} K</kbd>
        </button>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/sponsors/juanigarciadev"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center gap-2 rounded-xl bg-corporative px-4 text-sm font-medium text-white shadow-md shadow-corporative/30 hover:bg-corporativeHover duration-200 lg:hidden"
          >
            <Heart size={14} className="fill-white" /> Sponsor
          </a>
          <button type="button" onClick={handleChangeTheme} aria-label="Toggle theme" className={iconButton}>
            <ThemeIcon size={18} />
          </button>
          <a href="https://github.com/juanigarciadev/BlossomUI" target="_blank" rel="noreferrer" aria-label="GitHub repository" className={`${iconButton} lg:hidden`}>
            <BsGithub size={18} />
          </a>
          <button type="button" onClick={() => setMobileNavToggle((open) => !open)} aria-label="Open menu" className={`${iconButton} hidden lg:grid`}>
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      {mobileNavToggle && (
        <>
          <div className="fixed inset-0 z-[55] hidden bg-black/50 lg:block" onClick={() => setMobileNavToggle(false)} aria-hidden="true" />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed bottom-0 right-0 top-0 z-[60] hidden w-[80%] max-w-xs flex-col overflow-y-auto border-l border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-white lg:flex"
          >
            <div className="flex justify-end pb-2">
              <button type="button" aria-label="Close menu" className={iconButton} onClick={() => setMobileNavToggle(false)}>
                <X size={18} />
              </button>
            </div>
            <MobileGroup title="Menu" items={[{ name: "Home", url: "/" }, { name: "Components", url: "/components" }]} />
            <MobileGroup title="Getting started" items={introduction} />
            <MobileGroup title="Customization" items={customization} />
            <MobileGroup title="Components" items={components} />
            <a
              href="https://github.com/sponsors/juanigarciadev"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-corporative py-3 text-sm font-medium text-white hover:bg-corporativeHover"
            >
              <Heart size={14} className="fill-white" /> Sponsor
            </a>
          </aside>
        </>
      )}
      <Suspense fallback={<div className="min-h-screen w-full" role="status" aria-label="Loading page" />}>
        <Outlet context={[theme]} />
      </Suspense>
    </>
  );
};

const MobileGroup = ({ title, items }) => (
  <nav aria-label={title} className="flex flex-col pb-4">
    <h4 className="px-3 pb-1 text-xs font-medium uppercase tracking-wide text-neutral-400">{title}</h4>
    {items.map((item) => (
      <NavLink
        key={item.url}
        to={item.url}
        end
        className={({ isActive }) =>
          `rounded-xl px-3 py-2 text-sm ${isActive ? "bg-corporative/10 font-medium text-corporative" : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"}`
        }
      >
        {item.name}
      </NavLink>
    ))}
  </nav>
);

export default Navbar;
