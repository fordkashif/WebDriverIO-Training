import {imagePath} from '../../src/assests';
import FileUploadPage from '../../src/pages/FileUploadPage';

describe('File upload', () => {
    it('works', () => {
        const imageName = 'webdriverIO.png';
        const filePath = imagePath(imageName);

        FileUploadPage.open;
        FileUploadPage.chooseFile(filePath);
        FileUploadPage.upload;

        expect(FileUploadPage.uploadedFiles).toEqual(imageName);
    });
});
