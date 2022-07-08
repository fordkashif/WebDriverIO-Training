import BasePage from './BasePage';

class SauceLoginPage extends BasePage {

    get username() {
        return $("input[formControlName='username']");
    }

    get password() {
        return $("input[formControlName='password']");
    }

    get submit() {
        return $("//form/button[1]");
    }

    get home() {
        return $("//form/button[2]");
    }

    // get flash() {
    //     return $('.error-message-container > h3').getText();
    // }

    get open() {
        return browser.url('/login');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }

    goHome(){
        this.home.click();
    }
}

export default new SauceLoginPage();
