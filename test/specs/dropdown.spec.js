import DropdownPage from '../../src/pages/DropdownPage';

describe('Dropdown', () => {
    it('can be set using selectByVisibleText', () => {
        DropdownPage.open;
        DropdownPage.dropdownElement.selectByVisibleText('Option 2');

        expect(DropdownPage.dropdownElement.getValue()).toEqual('2');
    });

    it ('can be set using selectByAttribute', () => {
        DropdownPage.open;
        DropdownPage.dropdownElement.selectByAttribute('value', '1');

        expect(DropdownPage.dropdownElement.getValue()).toEqual('1');
    });

    it ('can be set using selectByAttribute', () => {
        DropdownPage.open;
        DropdownPage.dropdownElement.selectByIndex(2);

        expect(DropdownPage.dropdownElement.getValue()).toEqual('2');
    });
});
