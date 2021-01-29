import BasePage from './BasePage';

class BasicAuthPage extends BasePage {
    get message() {
        return $('#content > div > p').getText();
    }
}

export default new BasicAuthPage();
