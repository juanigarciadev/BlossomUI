import { Link } from "react-router-dom";
import { ArrowRight, Copy, Palette, GitBranch } from "lucide-react";
import DocPage from "./DocPage";

const linkClass = "text-corporative cursor-pointer hover:text-corporativeHover";

const steps = [
  {
    icon: Copy,
    title: "Copy & paste",
    text: "Pick a component, press Show code and paste it into your project. There is nothing to install besides Tailwind.",
  },
  {
    icon: Palette,
    title: "Make it yours",
    text: "Every component is plain Tailwind classes with dark mode support, so you can edit colors, sizes and spacing freely.",
  },
  {
    icon: GitBranch,
    title: "Open source",
    text: "Found something to improve or missing? Open a pull request and help the library grow.",
  },
];

const Introduction = () => {
  return (
    <DocPage
      title="Introduction"
      description="Free, open source components made with Tailwind CSS that you can copy and use right away."
    >
      <section className="flex flex-col gap-2">
        <p>
          Blossom UI is a library of components created with{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className={linkClass}>
            Tailwind CSS
          </a>
          . Their use is completely free, the only requirement is to have
          Tailwind installed in the project.
        </p>
        <Link to="/docs/getting-started/installation" className={`flex items-center ${linkClass}`}>
          How to install Tailwind CSS in my project
          <ArrowRight size={18} className="ml-1" />
        </Link>
      </section>

      <section className="grid grid-cols-3 gap-4 md:grid-cols-1">
        {steps.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="flex flex-col gap-2 p-4 rounded-xl border border-neutral-200 bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700"
          >
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-corporative bg-opacity-20 text-corporative text-xl">
              <Icon size={20} />
            </span>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{text}</p>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">How Tailwind works?</h2>
        <p>
          Tailwind CSS works by scanning all of your HTML files, JavaScript
          components, and any other templates for class names, generating the
          corresponding styles and then writing them to a static CSS file.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">How can I contribute with the project?</h2>
        <p>
          You can always enter the{" "}
          <a href="https://github.com/juanigarciadev/BlossomUI" target="_blank" rel="noreferrer" className={linkClass}>
            Github repository
          </a>{" "}
          to add components to the documentation, always following the
          standards and steps specified in the repository&apos;s README file.
        </p>
      </section>
    </DocPage>
  );
};

export default Introduction;
