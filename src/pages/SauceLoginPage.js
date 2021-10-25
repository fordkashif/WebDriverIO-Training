import BasePage from './BasePage';

class SauceLoginPage extends BasePage {

    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login-button');
    }

    get flash() {
        return $('.error-message-container > h3').getText();
    }

    get open() {
        return browser.url('/');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default new SauceLoginPage();
