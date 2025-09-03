import { test, expect} from '@playwright/test';
import { ElementsPage } from '../page/ElementsPage';
import { TextBoxDataGenerator } from '../test-data/textbox-data-generator';

// Test suite for DemoQA Elements functionality
test.describe('Elements Page Tests', () => {
    test('Should open and display Text Box page correctly', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        
        await elementsPage.openTextBoxPage();
        await elementsPage.expectTextBoxPageVisible();
  
})});

    test('Should successfully submit valid Text Box form data', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.openTextBoxPage();
        await elementsPage.expectTextBoxPageVisible();

        const testData = TextBoxDataGenerator.create();
        
        // Fill and validate form before submission
        await elementsPage.fillTextBoxForm(testData);
        await elementsPage.validateTextBoxFormData(testData);
        
        // Submit form and validate results
        await elementsPage.submitTextBoxForm();
        await elementsPage.validateSubmittedData(testData);
    });

    test('Should handle invalid email format gracefully', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.openTextBoxPage();
        await elementsPage.expectTextBoxPageVisible();

        const testData = TextBoxDataGenerator.create({ email: 'invalid-email' });
        await elementsPage.fillTextBoxForm(testData);
        await elementsPage.submitTextBoxForm();

    });

test('Submit Text Box Form with empty form', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
    const testData = TextBoxDataGenerator.create({email: ''});
    await elementsPage.fillTextBoxForm(testData);
    await elementsPage.submitTextBoxForm();
    

});

test('Should fill all Text Box fields with spaces (20 spaces each)', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
    await elementsPage.expectTextBoxPageVisible();

    const spacesData = ' '.repeat(20);
    const testData = TextBoxDataGenerator.create({
        fullName: spacesData,
        email: spacesData,
        currentAddress: spacesData,
        permanentAddress: spacesData
    });
    
    await elementsPage.fillTextBoxForm(testData);
    await elementsPage.submitTextBoxForm();
});