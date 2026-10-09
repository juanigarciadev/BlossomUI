import Default from './Default'
import AlertsWithIcons from './WithIcons'
import DefaultOutlined from './DefaultOutlined'
import AlertsWithList from './WithList'
import AlertsWithActions from './WithActions'
import DarkAlerts from './Dark'
import BorderAccentAlerts from './BorderAccent'
import DocPage from '../../DocPage'

const AlertsDocumentation = () => {
    return (
        <DocPage title='Alerts'>
            <Default />
            <AlertsWithIcons />
            <DefaultOutlined />
            <BorderAccentAlerts/>
            <AlertsWithList />
            <AlertsWithActions />
            <DarkAlerts />
        </DocPage>
    )
}

export default AlertsDocumentation
