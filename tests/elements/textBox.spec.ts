import { test} from '@playwright/test';
import { TextBoxPage } from '../../page/Elements/TextBox';
import { ElementsPage } from '../../page/Elements/ElementsPage';
import { TextBoxDataGenerator } from '../../test-data/textbox-data-generator';

// Global variable to track test attempts
let testAttempts: { [key: string]: number } = {};  

// Test suite for DemoQA Elements functionality
test.describe('Elements Page Tests', () => {
    test('Should open and display Text Box page correctly', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.openElementPage('textBox');
        await elementsPage.expectElementPageVisible('textBox');
    });

    test('Should successfully submit valid Text Box form data', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.openElementPage('textBox');
        await elementsPage.expectElementPageVisible('textBox');
        const textBoxPage = new TextBoxPage(page);

        const testData = TextBoxDataGenerator.create();

        // Fill and validate form before submission
        await textBoxPage.fillTextBoxForm(testData);
        await textBoxPage.validateTextBoxFormData(testData);
        
        // Submit form and validate results
        await textBoxPage.submitTextBoxForm();
        await textBoxPage.validateSubmittedData(testData);
    });

    test('Should handle invalid email format gracefully', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.openElementPage('textBox');
        await elementsPage.expectElementPageVisible('textBox');
        const textBoxPage = new TextBoxPage(page);

        const testData = TextBoxDataGenerator.create({ email: 'invalid-email' });
        await textBoxPage.fillTextBoxForm(testData);
        await textBoxPage.submitTextBoxForm();

    });

    test('Should fail first attempt and pass on second attempt', async ({ page }) => {
        const testName = 'Should fail first attempt and pass on second attempt';
        
        // Initialize attempt counter for this test
        if (!testAttempts[testName]) {
            testAttempts[testName] = 0;
        }
        testAttempts[testName]++;

        const elementsPage = new ElementsPage(page);
        await elementsPage.openElementPage('textBox');
        await elementsPage.expectElementPageVisible('textBox');
        const textBoxPage = new TextBoxPage(page);

        const testData = TextBoxDataGenerator.create();

        // Fill and validate form before submission
        await textBoxPage.fillTextBoxForm(testData);
        await textBoxPage.validateTextBoxFormData(testData);
        
        // Submit form and validate results
        await textBoxPage.submitTextBoxForm();
        
        // Fail on first attempt, pass on second
        if (testAttempts[testName] === 1) {
            throw new Error('Intentional failure on first attempt - this test should pass on retry');
        }
        
        await textBoxPage.validateSubmittedData(testData);
    });

test.skip('Submit Text Box Form with empty form', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openElementPage('textBox');
    await elementsPage.expectElementPageVisible('textBox');
    const textBoxPage = new TextBoxPage(page);
    const testData = TextBoxDataGenerator.create({email: ''});
    await textBoxPage.fillTextBoxForm(testData);
    await textBoxPage.submitTextBoxForm();
});

});