import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/OtpInput/OtpInput.tsx?raw'
import { OtpInput } from '../../../UI/OtpInput/OtpInput'

const file = 'src/components/UI/OtpInput/OtpInput.tsx'

const VerifyDemo = () => {
    const [code, setCode] = useState('')
    const [state, setState] = useState('idle')
    const verify = (value) => setState(value === '123456' ? 'ok' : 'wrong')
    return (
        <div className='flex flex-col gap-3'>
            <OtpInput
                label='Verification code'
                value={code}
                onChange={(value) => {
                    setCode(value)
                    setState('idle')
                }}
                onComplete={verify}
                error={state === 'wrong' ? 'That code is not valid. Try 123456.' : undefined}
                success={state === 'ok' ? 'Code verified' : undefined}
                hint={state === 'idle' ? 'We sent a 6 digit code to your email. Try 123456.' : undefined}
            />
            <p className='text-sm text-neutral-500'>Code: {code || 'empty'}</p>
        </div>
    )
}

const verifyCode = `const [code, setCode] = useState('')
const [state, setState] = useState('idle')

<OtpInput
  label="Verification code"
  value={code}
  onChange={(value) => {
    setCode(value)
    setState('idle')
  }}
  onComplete={(value) => setState(value === '123456' ? 'ok' : 'wrong')}
  error={state === 'wrong' ? 'That code is not valid.' : undefined}
  success={state === 'ok' ? 'Code verified' : undefined}
/>`

const OtpInputDocumentation = () => {
    return (
        <DocPage title='OTP input' description='One box for each character of a verification code. It moves forward while you type, goes back with Backspace and accepts a pasted code or the autofill of the code you receive by SMS.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Six digits. Type, paste a code in any box or use the arrow keys.' file={file}>
                <OtpInput label='Verification code' />
            </Variant>

            <Variant title='Verify the code' description='`onComplete` is called once, when every box is filled. Use `error` and `success` to answer.' file={file} code={verifyCode}>
                <VerifyDemo />
            </Variant>

            <Variant title='Length and separator' description='`length` sets the number of boxes and `separatorAfter` draws a dash after the boxes you list.' file={file} previewClassName='flex flex-col gap-6'>
                <OtpInput label='PIN' length={4} />
                <OtpInput label='Code' separatorAfter={[3]} />
            </Variant>

            <Variant title='Letters and numbers' description='`type` accepts letters too, for example for a coupon or a recovery code.' file={file}>
                <OtpInput label='Recovery code' type='alphanumeric' length={8} separatorAfter={[4]} size='sm' />
            </Variant>

            <Variant title='Masked' description='`mask` hides the characters, like a password. Use it for a PIN.' file={file}>
                <OtpInput label='PIN' length={4} mask defaultValue='1234' />
            </Variant>

            <Variant title='Sizes' description='`sm`, `md` and `lg`.' file={file} previewClassName='flex flex-col gap-6'>
                <OtpInput size='sm' length={4} />
                <OtpInput size='md' length={4} />
                <OtpInput size='lg' length={4} />
            </Variant>

            <Variant title='Hint, error and success' description='Messages show under the boxes and color them.' file={file} previewClassName='flex flex-col gap-6'>
                <OtpInput label='Code' defaultValue='123' hint='Check your inbox.' />
                <OtpInput label='Code' defaultValue='123456' error='This code expired.' />
                <OtpInput label='Code' defaultValue='123456' success='Phone verified.' />
            </Variant>

            <Variant title='Disabled' description='Disabled boxes are dimmed.' file={file}>
                <OtpInput label='Code' defaultValue='4821' length={4} disabled />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the focus ring and the border of the box you are typing in. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <OtpInput label='Code' color='#0f766e' length={4} />
            </Variant>
        </DocPage>
    )
}

export default OtpInputDocumentation
