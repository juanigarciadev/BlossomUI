import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Alerts/Alert.tsx?raw'
import { Alert, AlertAction } from '../../../UI/Alerts/Alert'

const file = 'src/components/UI/Alerts/Alert.tsx'

const messages = {
    default: 'Info alert! Change a few things up and try submitting again.',
    green: 'Successful alert! Change a few things up and try submitting again.',
    red: 'Error alert! Change a few things up and try submitting again.',
    yellow: 'Warning alert! Change a few things up and try submitting again.',
    dark: 'Dark alert! Change a few things up and try submitting again.',
}
const colors = Object.keys(messages)

const Alerts = () => {
    return (
        <DocPage title='Alerts' description='Give feedback to the user about an action or a state of the page.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Use alerts with multiple colors to correct user inputs.' file={file} previewClassName='flex flex-col gap-4'>
                {colors.map((color) => <Alert key={color} color={color}>{messages[color]}</Alert>)}
            </Variant>

            <Variant title='Outlined' description='Add a border with `variant="outlined"`.' file={file} previewClassName='flex flex-col gap-4'>
                {colors.map((color) => <Alert key={color} color={color} variant='outlined'>{messages[color]}</Alert>)}
            </Variant>

            <Variant title='Border accent' description="Draw the user's attention with an accent at the beginning of the alert." file={file} previewClassName='flex flex-col gap-4'>
                {colors.map((color) => <Alert key={color} color={color} variant='accent'>{messages[color]}</Alert>)}
            </Variant>

            <Variant title='With icons' description='Show an icon that matches the color.' file={file} previewClassName='flex flex-col gap-4'>
                {colors.map((color) => <Alert key={color} color={color} showIcon>{messages[color]}</Alert>)}
            </Variant>

            <Variant title='With list' description='Show the user a list of steps or errors.' file={file} previewClassName='flex flex-col gap-4'>
                <Alert showIcon list={['First list item of the alert.', 'Second list item of the alert.', 'Third list item of the alert.']}>Info alert! Change a few things up and try submitting again.</Alert>
                <Alert color='red' showIcon list={['Your password is too short.', 'Your email is not valid.']}>Please fix the following errors.</Alert>
            </Variant>

            <Variant
                title='With actions'
                description='Add buttons below the message with the `actions` prop.'
                file={file}
                previewClassName='flex flex-col gap-4'
            >
                <Alert
                    showIcon
                    actions={<><AlertAction primary>Primary action</AlertAction><AlertAction>Secondary action</AlertAction></>}
                >
                    Replace this text with something referring to the actions that can be performed with the buttons below.
                </Alert>
            </Variant>

            <Variant title='Dismissible' description='With `dismissible` the alert hides itself when the close button is pressed. Use `onDismiss` to react to it.' file={file} previewClassName='flex flex-col gap-4'>
                <Alert color='green' showIcon dismissible>Your changes have been saved.</Alert>
                <Alert color='yellow' showIcon dismissible>Your trial ends in 3 days.</Alert>
            </Variant>
        </DocPage>
    )
}

export default Alerts
