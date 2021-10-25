// import {expect} from 'chai';
import {config} from '../../src/config/sauce_index';
import SauceLoginPage from '../../src/pages/SauceLoginPage';

describe('Login page', () => {
    it('displays message with invalid credentials', () => {
        SauceLoginPage.open;
        SauceLoginPage.loginWithCredentials('foo', 'bar');

        expect(SauceLoginPage.flash).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should allow access with correct credentials', () => {
        SauceLoginPage.open;
        SauceLoginPage.loginWithCredentials('standard_user', 'secret_sauce');

        expect(SauceLoginPage.result);
    });

});
