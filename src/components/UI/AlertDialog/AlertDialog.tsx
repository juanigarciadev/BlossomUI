import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useOverlay } from '../overlay'
import { Button, type ButtonColor } from '../Buttons/Button'

export type AlertDialogTone = 'default' | 'danger' | 'warning' | 'success'

export interface AlertDialogProps {
    open: boolean
    /** Called when the user cancels: the cancel button, Escape or, with `closeOnBackdrop`, a click outside. */
    onClose: () => void
    /** Called when the user confirms. The dialog does not close by itself: close it here, after the work is done. */
    onConfirm: () => void
    title: string
    /** What is going to happen and what it means. */
    children?: ReactNode
    /** `danger` for deleting something, `warning` for something that cannot be undone easily. */
    tone?: AlertDialogTone
    /** Text of the confirm button. */
    confirmLabel?: string
    /** Text of the cancel button. */
    cancelLabel?: string
    /** Shows a spinner in the confirm button and blocks the dialog while the work is done. */
    loading?: boolean
    /** Icon shown above the title. A default one is drawn for each tone. */
    icon?: ReactNode
    /** Color of the confirm button. By default it follows `tone`. */
    confirmColor?: ButtonColor | (string & {})
    /** Close when the user clicks outside. Off by default: an alert asks for an answer. */
    closeOnBackdrop?: boolean
}

const tones: Record<AlertDialogTone, { button: ButtonColor; icon: string; path: string }> = {
    default: { button: 'primary', icon: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200', path: 'M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
    danger: { button: 'red', icon: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400', path: 'M6 7h12m-9 0V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7' },
    warning: { button: 'yellow', icon: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400', path: 'M12 9v4m0 4h.01M10.3 4.3 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z' },
    success: { button: 'green', icon: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400', path: 'm5 12 5 5L20 7' },
}

/** A dialog that asks the user to confirm something that matters. Unlike Modal it has no close button: the user has to answer. */
export const AlertDialog = ({ open, onClose, onConfirm, title, children, tone = 'default', confirmLabel = 'Confirm', cancelLabel = 'Cancel', loading = false, icon, confirmColor, closeOnBackdrop = false }: AlertDialogProps) => {
    const titleId = useId()
    const descriptionId = useId()
    const panel = useRef<HTMLDivElement>(null)
    // While the work runs, Escape and the backdrop do nothing.
    useOverlay(open, () => !loading && onClose(), panel)

    // The safe answer gets the focus, so pressing Enter by mistake does not confirm.
    useEffect(() => {
        if (open) panel.current?.querySelector<HTMLButtonElement>('button')?.focus()
    }, [open])

    if (!open) return null

    const style = tones[tone]

    return createPortal(
        <div
            className='fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm'
            onMouseDown={(event) => {
                if (closeOnBackdrop && !loading && event.target === event.currentTarget) onClose()
            }}
        >
            <div
                ref={panel}
                role='alertdialog'
                aria-modal='true'
                aria-labelledby={titleId}
                aria-describedby={children ? descriptionId : undefined}
                tabIndex={-1}
                className='w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-800 shadow-xl outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
            >
                <div className='flex gap-4 xs:flex-col'>
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${style.icon}`}>
                        {icon ?? (
                            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin='round' d={style.path} />
                            </svg>
                        )}
                    </span>
                    <div className='flex flex-col gap-1'>
                        <h3 id={titleId} className='text-lg font-medium'>{title}</h3>
                        {children && <div id={descriptionId} className='text-sm text-neutral-600 dark:text-neutral-300'>{children}</div>}
                    </div>
                </div>
                <div className='mt-6 flex justify-end gap-2 xs:flex-col-reverse [&>*]:xs:w-full'>
                    <Button color='secondary' disabled={loading} onClick={onClose}>{cancelLabel}</Button>
                    <Button color={confirmColor ?? style.button} loading={loading} onClick={onConfirm}>{confirmLabel}</Button>
                </div>
            </div>
        </div>,
        document.body
    )
}
