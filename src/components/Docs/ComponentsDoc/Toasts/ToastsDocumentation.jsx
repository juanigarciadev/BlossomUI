import ProductToast from './ProductToast'
import ActionToast from './ActionsToast'
import DocPage from '../../DocPage'

const ToastsDocumentation = () => {
    return (
        <DocPage title='Toasts'>
            <ActionToast/>
            <ProductToast/>
        </DocPage>
    )
}

export default ToastsDocumentation
