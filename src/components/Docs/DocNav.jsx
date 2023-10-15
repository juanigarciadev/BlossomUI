import React from 'react'
import { components, customization, introduction } from '../../mocks/docs'
import { Link } from 'react-router-dom'

const DocNav = () => {
    return (
        <div className='absolute hidden flex-col bg-white border shadow-sm h-80 overflow-scroll overflow-x-hidden w-60 rounded-lg z-10 dark:bg-neutral-900 dark:border-neutral-800 lg:flex'>
            <h3 className='font-medium pl-4 pt-4 pb-2'>Getting started</h3>
            {introduction.map((introduction) => {
                return (
                    <Link to={introduction.url} key={introduction.name} className='text-neutral-500 pl-8 py-4 hover:bg-neutral-200 dark:hover:bg-neutral-800'>{introduction.name}</Link>
                )
            })}
            <hr />
            <h3 className='font-medium pl-4 pt-4 pb-2'>Customization</h3>
            {customization.map((customize) => {
                return (
                    <Link to={customize.url} key={customize.name} className='text-neutral-500 pl-8 py-4 hover:bg-neutral-200 dark:hover:bg-neutral-800'>{customize.name}</Link>
                )
            })}
            <hr />
            <h3 className='font-medium pl-4 pt-4 pb-2'>Components</h3>
            {components.map((component) => {
                return (
                    <Link to={component.url} key={component.name} className='text-neutral-500 pl-8 py-4 hover:bg-neutral-200 dark:hover:bg-neutral-800'>{component.name}</Link>
                )
            })}
        </div>
    )
}

export default DocNav