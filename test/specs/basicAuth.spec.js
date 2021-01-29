import BasicAuthPage from '../../src/pages/BasicAuthPage';

describe('Basic auth', () => {
    it('works if username and password are passed in the url', () => {
        browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');

        expect(BasicAuthPage.message).toEqual('Congratulations! You must have the proper credentials.');
    });
});
