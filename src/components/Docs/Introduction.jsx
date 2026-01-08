import React, { useState } from "react";
import Aside from "./Aside";
import { Link } from "react-router-dom";
import { BiChevronDown, BiRightArrowAlt } from "react-icons/bi";
import DocNav from "./DocNav";
import Footer from "../Footer/Footer";

const Introduction = () => {
  const [docNav, setDocNav] = useState(false);
  return (
    <div className="flex lg:pt-[70px] w-full h-screen relative">
      <section className="absolute h-[calc(100vh-70px)] flex flex-col justify-between pl-8 pt-4 lg:w-full lg:left-0 lg:px-0 dark:text-white">
        <div>
          <div className="flex gap-4 items-center pb-4">
            <h1 className="text-4xl font-bold text-neutral-800 dark:text-white">
              Introduction
            </h1>
            <div
              className="hidden items-center justify-center cursor-pointer h-8 w-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 lg:flex"
              onClick={() => setDocNav(!docNav)}
            >
              <BiChevronDown />
            </div>
          </div>
          {docNav && <DocNav />}
          <section className="flex flex-col gap-2">
            <p className="w-full">
              Blossom UI is a library of components created with{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-corporative cursor-pointer hover:text-corporativeHover"
              >
                Tailwind CSS
              </a>
              . Their use is completely free, the only requirement is to have
              Tailwind installed in the project.
            </p>
            <Link
              to="/docs/getting-started/installation"
              className="flex text-corporative cursor-pointer hover:text-corporativeHover"
            >
              How to install Tailwind CSS in my project
              <BiRightArrowAlt className="text-2xl" />
            </Link>
          </section>
          <section>
            <h2 className="text-2xl font-bold pt-6 text-neutral-800 dark:text-white">
              How to use?
            </h2>
            <p>
              Very simple, just copy and paste our components code in your
              project.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold pt-6 text-neutral-800 dark:text-white">
              How Tailwind works?
            </h2>
            <p>
              Tailwind CSS works by scanning all of your HTML files, JavaScript
              components, and any other templates for class names, generating
              the corresponding styles and then writing them to a static CSS
              file.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold pt-6 text-neutral-800 dark:text-white">
              How can I contribute with the project?
            </h2>
            <p>
              You can always enter the{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-corporative cursor-pointer hover:text-corporativeHover"
              >
                Github repository
              </a>{" "}
              to add components to the documentation, always following the
              standards and steps specified in the repository's README file.
            </p>
          </section>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Introduction;
