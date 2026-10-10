import { useId, useRef, useState, type ChangeEvent, type DragEvent } from 'react'

export interface FileUploadProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: { hint?: string; remove?: (name: string) => string }
    /** Accepted types, same format as the `accept` attribute, for example "image/*,.pdf". */
    accept?: string
    multiple?: boolean
    /** Maximum size of each file in megabytes. Bigger files are rejected with an error message. */
    maxSizeMb?: number
    label?: string
    hint?: string
    disabled?: boolean
    /** Called with the accepted files every time the list changes. */
    onChange?: (files: File[]) => void
}

const formatSize = (bytes: number) => (bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`)

export const FileUpload = ({ labels, accept, multiple = false, maxSizeMb, label = 'Upload files', hint, disabled = false, onChange }: FileUploadProps) => {
    const id = useId()
    const input = useRef<HTMLInputElement>(null)
    const [files, setFiles] = useState<File[]>([])
    const [dragging, setDragging] = useState(false)
    const [error, setError] = useState('')

    const accepts = (file: File) => {
        if (!accept) return true
        return accept.split(',').some((rule) => {
            const value = rule.trim().toLowerCase()
            if (value.startsWith('.')) return file.name.toLowerCase().endsWith(value)
            if (value.endsWith('/*')) return file.type.startsWith(value.slice(0, -1))
            return file.type === value
        })
    }

    const add = (incoming: File[]) => {
        const rejected: string[] = []
        const valid = incoming.filter((file) => {
            if (!accepts(file)) rejected.push(`${file.name} is not an accepted type`)
            else if (maxSizeMb && file.size > maxSizeMb * 1024 * 1024) rejected.push(`${file.name} is bigger than ${maxSizeMb} MB`)
            else return true
            return false
        })
        setError(rejected.join('. '))
        if (valid.length === 0) return
        const next = multiple ? [...files, ...valid] : [valid[0]]
        setFiles(next)
        onChange?.(next)
    }

    const remove = (index: number) => {
        const next = files.filter((_, position) => position !== index)
        setFiles(next)
        onChange?.(next)
    }

    const onDrop = (event: DragEvent<HTMLLabelElement>) => {
        event.preventDefault()
        setDragging(false)
        if (!disabled) add(Array.from(event.dataTransfer.files))
    }

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        add(Array.from(event.target.files ?? []))
        event.target.value = ''
    }

    return (
        <div className='flex w-full flex-col gap-3'>
            <label
                htmlFor={id}
                onDragOver={(event) => { event.preventDefault(); if (!disabled) setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-colors focus-within:ring-2 focus-within:ring-[var(--blossom-accent,#f472b6)] ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${dragging ? 'border-[var(--blossom-accent,#f472b6)] bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_10%,transparent)]' : 'border-neutral-300 hover:border-[var(--blossom-accent,#f472b6)] dark:border-neutral-700'}`}
            >
                <svg className='h-8 w-8 text-[var(--blossom-accent,#f472b6)]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='1.8'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 16V4m0 0L7 9m5-5 5 5M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2' />
                </svg>
                <span className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</span>
                <span className='text-xs text-neutral-500'>{hint ?? 'Drag and drop or click to browse'}</span>
                <input ref={input} id={id} type='file' accept={accept} multiple={multiple} disabled={disabled} onChange={onSelect} className='sr-only' />
            </label>
            {error && <p role='alert' className='text-xs text-red-600 dark:text-red-400'>{error}</p>}
            {files.length > 0 && (
                <ul className='flex flex-col gap-2'>
                    {files.map((file, index) => (
                        <li key={`${file.name}-${index}`} className='flex items-center justify-between gap-3 rounded-xl border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-700'>
                            <span className='min-w-0 flex-1 truncate text-neutral-800 dark:text-white'>{file.name}</span>
                            <span className='shrink-0 text-xs text-neutral-500'>{formatSize(file.size)}</span>
                            <button type='button' aria-label={labels?.remove ? labels.remove(file.name) : `Remove ${file.name}`} onClick={() => remove(index)} className='shrink-0 rounded-lg p-1 text-neutral-500 outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:hover:bg-neutral-800'>
                                <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M6 6l12 12M18 6 6 18' /></svg>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
