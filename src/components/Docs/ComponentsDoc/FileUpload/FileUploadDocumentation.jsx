import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/FileUpload/FileUpload.tsx?raw'
import { FileUpload } from '../../../UI/FileUpload/FileUpload'

const file = 'src/components/UI/FileUpload/FileUpload.tsx'

const FileUploadDocumentation = () => {
    return (
        <DocPage title='File upload' description='Drag and drop files or browse for them. The input is a real file input, so it works with the keyboard and screen readers.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A single file. Choosing another one replaces it.' file={file} previewClassName='flex w-full [&>*]:max-w-lg'>
                <FileUpload label='Upload your resume' hint='PDF up to 5 MB' accept='.pdf' maxSizeMb={5} />
            </Variant>

            <Variant title='Multiple' description='Files are added to a list with their size and a remove button.' file={file} previewClassName='flex w-full [&>*]:max-w-lg'>
                <FileUpload multiple label='Upload images' hint='PNG or JPG, up to 2 MB each' accept='image/*' maxSizeMb={2} />
            </Variant>

            <Variant title='Disabled' description='The zone is dimmed and ignores drops.' file={file} previewClassName='flex w-full [&>*]:max-w-lg'>
                <FileUpload disabled label='Uploads are closed' />
            </Variant>
        </DocPage>
    )
}

export default FileUploadDocumentation
