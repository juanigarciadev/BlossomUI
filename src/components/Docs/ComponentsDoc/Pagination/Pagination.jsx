import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Pagination/Pagination.tsx?raw'
import { Pagination, SimplePagination } from '../../../UI/Pagination/Pagination'

const file = 'src/components/UI/Pagination/Pagination.tsx'

const DefaultDemo = () => {
    const [page, setPage] = useState(2)
    return <Pagination page={page} total={5} onChange={setPage} />
}

const RoundedDemo = () => {
    const [page, setPage] = useState(3)
    return <Pagination page={page} total={5} onChange={setPage} rounded />
}

const ManyDemo = () => {
    const [page, setPage] = useState(10)
    return <Pagination page={page} total={20} onChange={setPage} />
}

const SimpleDemo = () => {
    const [page, setPage] = useState(2)
    return <SimplePagination page={page} total={10} onChange={setPage} />
}

const ResultsDemo = () => {
    const [page, setPage] = useState(2)
    const perPage = 10
    const total = 97
    const from = (page - 1) * perPage + 1
    const to = Math.min(page * perPage, total)
    return (
        <div className='flex w-full items-center justify-between gap-4 text-sm sm:flex-col'>
            <p className='text-neutral-600 dark:text-neutral-300'>
                Showing <b className='font-medium text-neutral-900 dark:text-white'>{from}</b> to <b className='font-medium text-neutral-900 dark:text-white'>{to}</b> of <b className='font-medium text-neutral-900 dark:text-white'>{total}</b> results
            </p>
            <Pagination page={page} total={Math.ceil(total / perPage)} onChange={setPage} />
        </div>
    )
}

const code = (total, extra = '') => `const [page, setPage] = useState(1)

<Pagination page={page} total={${total}} onChange={setPage}${extra} />`

const resultsCode = `const [page, setPage] = useState(1)
const perPage = 10
const total = 97

<p>Showing {(page - 1) * perPage + 1} to {Math.min(page * perPage, total)} of {total} results</p>
<Pagination page={page} total={Math.ceil(total / perPage)} onChange={setPage} />`

const PaginationDocumentation = () => {
    return (
        <DocPage title='Pagination' description='Let users move through long lists of content. It keeps no state: you own the current page.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Numbered pages with previous and next buttons.' file={file} code={code(5)}>
                <DefaultDemo />
            </Variant>

            <Variant title='Rounded' description='A lighter version with round page buttons.' file={file} code={code(5, ' rounded')}>
                <RoundedDemo />
            </Variant>

            <Variant title='Many pages' description='Long lists collapse into ellipses. Use `siblings` to control how many neighbors are shown.' file={file} code={code(20)}>
                <ManyDemo />
            </Variant>

            <Variant title='Simple' description='Only previous and next, with the current page in between.' file={file} code={`const [page, setPage] = useState(1)

<SimplePagination page={page} total={10} onChange={setPage} />`}>
                <SimpleDemo />
            </Variant>

            <Variant title='With results' description='Show how many results are being displayed.' file={file} code={resultsCode}>
                <ResultsDemo />
            </Variant>
        </DocPage>
    )
}

export default PaginationDocumentation
