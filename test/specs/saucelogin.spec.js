// import {expect} from 'chai';
import {config} from '../../src/config/index';
import SauceLoginPage from '../../src/pages/SauceLoginPage';

describe('Login page', () => {
    // it('displays message with invalid credentials', () => {
    //     SauceLoginPage.open;
    //     SauceLoginPage.loginWithCredentials('foo', 'bar');
    //     // SauceLoginPage.loginWithCredentials(config.username, config.password);

    //     expect(SauceLoginPage.flash).toContain('Epic sadface: Username and password do not match any user in this service');
    // });

    // it('should display a message with no username', () => {
    //     SauceLoginPage.open;
    //     SauceLoginPage.loginWithCredentials('', 'secret_sauce');

    //     expect(SauceLoginPage.flash).toContain('Epic sadface: Username is required');
    // });

    // it('should display a message with no password', () => {
    //     SauceLoginPage.open;
    //     SauceLoginPage.loginWithCredentials('foo', '');

    //     expect(SauceLoginPage.flash).toContain('Epic sadface: Password is required');
    // });
    it('should allow user to go home', () => {
        SauceLoginPage.open;
        SauceLoginPage.goHome();

        expect(SauceLoginPage.result);
    })

    it('should allow access with correct credentials', () => {
        SauceLoginPage.open;
        SauceLoginPage.loginWithCredentials('super', 'F0rD$up3r');
        // SauceLoginPage.loginWithCredentials(config.username, config.password);

        expect(SauceLoginPage.result);
    });

});
