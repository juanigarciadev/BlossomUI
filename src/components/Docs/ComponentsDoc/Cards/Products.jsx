import React, { useState } from "react";
import { ProductsCard } from "../../../UI/Card/ProductCard";
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const Products = () => {
  const [showCode, setShowCode] = useState(false);

  const productCard = `<article className="relative flex flex-col gap-4 border bg-neutral-100 w-64 h-fit rounded-lg p-4 shadow-sm dark:bg-neutral-900 dark:border-neutral-700"><div><img src="https://res.cloudinary.com/diruiumfk/image/upload/v1708208011/nike-logo_jqzbn0.svg" alt="Nike logo" className="absolute w-12 h-12 dark:invert"/></div><div className="absolute right-4"><svg title="Add to favorites" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="cursor-pointer fill-[#a3a3a3] hover:fill-red-600 dark:fill-[#262626] dark:hover:fill-red-600" fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg></div><div><img src="https://res.cloudinary.com/diruiumfk/image/upload/v1701482959/jordan-dior_lp6sqo.webp" alt="Air Jordan 1 Dior"/></div><div className="flex flex-col justify-between flex-grow"><section className="flex flex-col gap-4"><section className="flex flex-col"><h3 className="font-medium text-xl">Air Jordan 1 Dior</h3><span className="text-sm text-neutral-500">Sneakers</span></section><section><section className="flex flex-col gap-1"><span className="flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 gap-1 bg-blue-100 text-blue-900 rounded-lg cursor-default dark:bg-blue-900 dark:text-blue-300"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z"/><path fill="currentColor" d="M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z"/></svg>23% OFF</span><div className="inline-flex gap-1 items-end"><p className="text-lg font-medium">$500.00</p><span className="text-[12px] mb-[4px] line-through text-neutral-500">$650.00</span></div></section></section></section><section className="pt-6"><button className="flex justify-center items-center text-center border border-neutral-300 bg-transparent w-full h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800">Add to cart</button></section></div></article>`;

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
        <EditInGithub url={githubUrl}
        />
      </div>
      <div className="flex flex-col">
        {showCode ? (
          <div>
            <section className="flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700">
              <ProductsCard />
            </section>
            <CodeBlock
              name={"Products"}
              code={productCard}
              language={"javascript"}
            />
          </div>
        ) : (
          <section className="flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700">
            <ProductsCard />
          </section>
        )}
      </div>
    </article>
  );
};

export default Products;
