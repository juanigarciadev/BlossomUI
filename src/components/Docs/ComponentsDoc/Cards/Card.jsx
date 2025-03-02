import React, { useState } from "react";
import { CodeBlock } from "../../../CodeBlock/CodeBlock";
import EditInGithub from "../../../EditInGithub/EditInGithub";
import { DefaultCard } from "../../../UI/Card/Card";
import { HideCodeIcon, ShowCodeIcon } from '@icons'

const Card = () => {
  const [showCode, setShowCode] = useState(false);

  const defaultCard = `<section className="flex flex-col gap-4 w-80 h-auto bg-neutral-200 bg-opacity-40 border border-neutral-300 rounded-lg p-8 shadow-sm dark:bg-neutral-800 dark:border-neutral-600"><div className="flex justify-center items-center bg-pink-400 rounded-full w-10 h-10"><svg className="text-white" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4"></path><path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8"></path><path fill="currentColor" d="m8.535 12.634l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.488 1.488 0 0 0-2.067.068c-.586.6-.579 1.53.019 2.117zm7 0l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.488 1.488 0 0 0-2.068.067c-.586.6-.579 1.53.019 2.117z"></path></svg></div><h3 className="text-black text-2xl font-bold dark:text-white">Customizable</h3><p className="text-neutral-800 text-sm dark:text-neutral-300">Highly customizable, just modify the Tailwind tags and voilà!</p></section>`;

  const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Card/Card.jsx'

  return (
    <article>
      <div className="pb-4">
        <h3 className="text-lg font-medium">Products</h3>
        <p className="dark:text-neutral-300">
          Use this card for showing a product with his image, price and more
          information.
        </p>
      </div>
      <div className="flex gap-2 pb-2 select-none lg:flex-col">
        <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
        <EditInGithub url={githubUrl}/>
      </div>
      <div className="flex flex-col">
        {showCode ? (
          <div>
            <section className="flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700">
              <DefaultCard />
            </section>
            <CodeBlock
              name={"Products"}
              code={defaultCard}
              language={"javascript"}
            />
          </div>
        ) : (
          <section className="flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700">
            <DefaultCard />
          </section>
        )}
      </div>
    </article>
  );
};

export default Card;
