import React, { useState } from "react";
import { CodeBlock } from "../../../CodeBlock/CodeBlock";
import EditInGithub from "../../../EditInGithub/EditInGithub";
import { EmojiRatingSurvey } from "../../../UI/Survey/Survey";

const EmojiRating = () => {
  const [showCode, setShowCode] = useState(false);

  const emojiRating = `<article className="flex flex-col gap-2 w-full h-fit relative px-4 py-4 bg-blue-100 rounded-lg dark:bg-blue-900">
    <span className="absolute select-none text-3xl text-blue-100 -top-6 left-[45%] -rotate-90 dark:text-blue-900">
      ▶
    </span>
    <section className="flex justify-between sm:flex-col-reverse overflow-x-clip">
      <span className="text-blue-900 dark:text-blue-300">
        How happy are you with this recommendation?
      </span>
      <div className="group h-fit w-fit hover:bg-blue-200 dark:hover:bg-blue-800 rounded cursor-pointer p-2">
        <svg
          className="text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"
          />
        </svg>
      </div>
    </section>
    <section className="flex flex-col gap-1">
      <div className="flex justify-between">
        <svg
          className="cursor-pointer hover:scale-110 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M7 7a.75.75 0 1 1-1.258-.551l-.596-.595a.5.5 0 1 1 .708-.708l1 1a.5.5 0 0 1 .093.578A.748.748 0 0 1 7 7Zm2.75.75a.75.75 0 0 0 .508-1.301l.596-.595a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0-.093.578a.75.75 0 0 0 .697 1.026Zm-4.32 3.623a.5.5 0 0 0 .706-.04A2.492 2.492 0 0 1 8 10.5c.74 0 1.405.321 1.863.834a.5.5 0 0 0 .745-.668A3.493 3.493 0 0 0 8 9.5a3.493 3.493 0 0 0-2.609 1.166a.5.5 0 0 0 .04.707ZM8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3Z"
          />
        </svg>
        <svg
          className="cursor-pointer hover:scale-110 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Zm4-1.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-4.368 4.072c.925-1.096 2.81-1.096 3.736 0a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644Z"
          />
        </svg>
        <svg
          className="cursor-pointer hover:scale-110 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M7 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 7Zm2.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM6 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6Zm2-7a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3Z"
          />
        </svg>
        <svg
          className="cursor-pointer hover:scale-110 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-.114 1.917a.5.5 0 1 0-.745.667A3.493 3.493 0 0 0 8 11.5a3.493 3.493 0 0 0 2.609-1.166a.5.5 0 0 0-.745-.667A2.492 2.492 0 0 1 8 10.5c-.74 0-1.405-.321-1.864-.833ZM10.5 7A.75.75 0 1 1 9 7a.75.75 0 0 1 1.5 0ZM14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z"
          />
        </svg>
        <svg
          className="cursor-pointer hover:scale-110 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M6 6a.5.5 0 0 0-.5.5a.5.5 0 0 1-1 0a1.5 1.5 0 1 1 3 0a.5.5 0 0 1-1 0A.5.5 0 0 0 6 6Zm4 0a.5.5 0 0 0-.5.5a.5.5 0 0 1-1 0a1.5 1.5 0 1 1 3 0a.5.5 0 0 1-1 0A.5.5 0 0 0 10 6ZM4.535 8a.5.5 0 0 0-.495.57a4 4 0 0 0 7.92 0a.5.5 0 0 0-.496-.57H4.535ZM8 11a3.002 3.002 0 0 1-2.83-2h5.66A3.002 3.002 0 0 1 8 11Zm6-3A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z"
          />
        </svg>
      </div>
      <div className="flex justify-between">
        <span className="cursor-default select-none text-xs text-blue-900 dark:text-blue-300">
          Not happy
        </span>
        <span className="cursor-default select-none text-xs text-blue-900 dark:text-blue-300">
          Very happy
        </span>
      </div>
    </section>
  </article>`;

  return (
    <article>
      <div className="pb-4">
        <h3 className="text-lg font-medium">Emoji rating</h3>
        <p className="dark:text-neutral-300">
          Allows the user to rate previously displayed content.
        </p>
      </div>
      <div className="flex gap-2 pb-2 select-none lg:flex-col">
        <button
          className="bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z"
                />
              </svg>
              <span>Hide code</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-1.641-1.359-3-3-3z"
                />
                <path
                  fill="currentColor"
                  d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z"
                />
              </svg>
              <span>Show code</span>
            </div>
          )}
        </button>
        <EditInGithub
          url={
            "https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Survey/Survey.jsx"
          }
        />
      </div>
      <div className="flex flex-col">
        {showCode ? (
          <div>
            <section className="flex flex-wrap rounded-lg gap-1 p-4 pt-6 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700">
              <EmojiRatingSurvey />
            </section>
            <CodeBlock
              name={"Emoji rating"}
              code={emojiRating}
              language={"javascript"}
            />
          </div>
        ) : (
          <section className="flex flex-wrap rounded-lg gap-1 p-4 pt-6 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700">
            <EmojiRatingSurvey />
          </section>
        )}
      </div>
    </article>
  );
};

export default EmojiRating;
