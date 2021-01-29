# WebdriverIO Training

This is a test automation project that uses WebdriverIO v6. This project demonstrates examples of how to write tests in WebDriverIO and how to leverage some new features introduced in v6 as well as how to use the Page Object Pattern for Automated Testing.

## Getting Started
```
Copy and connect the repository locally so that you can push updates you make and pull changes others make. Enter git clone and the repository URL at your command line:

git clone https://github.com/OrandiH/WebDriverIO-Training.git

cd WebdriverIO-Training
npm install

```

This project uses [Babel](https://babeljs.io/) for compiling the JavaScript test automation code as detailed on the [WebdriverIO Babel setup](https://webdriver.io/docs/babel.html) page. 

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really cool method of abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. Optionally, you can create convenience methods like `loginWithCredentials()` that allow you to write more concise tests. 

##### `src/pages/LogInPage.js`

```javascript
import BasePage from './BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    get flash() {
        return $('#flash').getText();
    }

    get open() {
        return browser.url('/login');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default new LoginPage();
```

##### `test/specs/login.spec.js`


```javascript
import {config} from '../../src/config/index';
import LoginPage from '../../src/pages/LogInPage';

describe('Login page', () => {
    it('displays message with invalid credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('foo', 'bar');

        expect(LoginPage.flash).toContain('Your username is invalid!');
    });

    it('should allow access with correct credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');

        expect(LoginPage.flash).toContain('You logged into a secure area!');
    });

    it('using config values specified in src/config', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials(config.username, config.password);

        expect(LoginPage.flash).toContain('You logged into a secure area!');
    });
});
```


## Running Tests
All the configurations to run your tests is found in the [wdio.conf.js](wdio.conf.js), for a complete guide on how to edit this configuration file, you can read here for more details (https://webdriver.io/docs/configurationfile.html) and (https://webdriver.io/docs/options.html)
Command to run all tests
```
    npm test
```
This command executes the wdio command which will run all the spec files in the project. 

Command to run a single test
```
    wdio wdio.conf.js --spec ./test/specsnameoftestfile.js
```

Command to run all tests headlessly (For CI/CD pipelines)
```
    wdio wdio.pipelines.conf.js
```

Command to run a single test headlessly (For CI/CD pipelines)
```
    wdio wido.pipelines.conf.js --spec ./test/specs/nameoftestfile.js
```

## Test Examples
The tests in this project use [http://the-internet.herokuapp.com](http://the-internet.herokuapp.com) to demonstrate how to interact with some of the most common `UI elements` you will encounter such as: dropdowns, basic auth, dynamic loading (waitUntil) and file uploads. The [official documentation](https://webdriver.io/docs/api.html) already covers most of these but it never hurts to see a practical example wired up and working. 

## Reporters
This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html).The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run `npm run report` to generate the allure report. 

Allure Report: 
[Video Preview](https://www.youtube.com/watch?v=tL8R6BqxJ3o)
![allure](src/assests/allure.png)


## Made with ❤️ and ☕️
