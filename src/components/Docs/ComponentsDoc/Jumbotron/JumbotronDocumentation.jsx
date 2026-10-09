import DefaultJumbotronDoc from './Default'
import BackgroundJumbotron from './BackgroundImage'
import DocPage from '../../DocPage'

const JumbotronDocumentation = () => {
    return (
        <DocPage title='Jumbotron'>
            <DefaultJumbotronDoc/>
            <BackgroundJumbotron/>
        </DocPage>
    )
}

export default JumbotronDocumentation
