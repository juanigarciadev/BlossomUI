import { Link } from "react-router-dom";
import { ArrowRight, Copy, Palette, GitBranch } from "lucide-react";
import DocPage from "./DocPage";
import { faq } from "../../mocks/seo";

const linkClass = "text-corporative cursor-pointer hover:text-corporativeHover";

const steps = [
  {
    icon: Copy,
    title: "Copy & paste",
    text: "Every component is a single .tsx file. Copy it into your project and import it, there is no package to install and no lock-in.",
  },
  {
    icon: Palette,
    title: "Typed and interactive",
    text: "Props are fully typed and components use React hooks where it makes sense: modals, selects, toasts, steppers and more manage their own state.",
  },
  {
    icon: GitBranch,
    title: "Yours to change",
    text: "Plain Tailwind classes with dark mode support. Edit colors, sizes and spacing freely, and open a pull request if you improve something.",
  },
];

const Introduction = () => {
  return (
    <DocPage
      title="Introduction"
      description="Free and open source React components written in TypeScript and styled with Tailwind CSS. Copy them into your project and make them yours."
    >
      <section className="flex flex-col gap-2">
        <p>
          Blossom UI is a library of React components created with{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className={linkClass}>
            Tailwind CSS
          </a>
          . Their use is completely free. You only need a React 18 project (Next.js, Vite or any other) with
          Tailwind CSS 3 installed. The components are written in TypeScript.
        </p>
        <Link to="/docs/getting-started/installation" className={`flex items-center ${linkClass}`}>
          How to set up my project
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
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">Frequently asked questions</h2>
        <div className="flex flex-col divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-700 dark:border-neutral-700">
          {faq.map((entry) => (
            <details key={entry.question} className="group px-4 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {entry.question}
                <span aria-hidden="true" className="text-neutral-400 duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="pt-2 text-sm text-neutral-600 dark:text-neutral-300">{entry.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </DocPage>
  );
};

export default Introduction;
