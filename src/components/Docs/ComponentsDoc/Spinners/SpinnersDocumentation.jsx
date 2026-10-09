import DefaultSpinnerDoc from './Default'
import SpinnerSize from './Sizes'
import SpinnerColor from './Colors'
import TransparentSpinnerDoc from './Transparent'
import DocPage from '../../DocPage'

const SpinnersDocumentation = () => {
    return (
        <DocPage title='Spinners'>
            <DefaultSpinnerDoc />
            <SpinnerSize />
            <SpinnerColor />
            <TransparentSpinnerDoc />
        </DocPage>
    )
}

export default SpinnersDocumentation
