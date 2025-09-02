import { test, expect } from '@playwright/test';
import { ElementsPage } from '../page/ElementsPage';
import { TextBoxDataGenerator } from '../test-data/textbox-data-generator';

test('Open Elements Page', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
});

test('Submit Text Box Form', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();

    const testData = TextBoxDataGenerator.create();
    await elementsPage.fillTextBoxForm(testData);
    await elementsPage.submitTextBoxForm();
    await elementsPage.validateTextBoxForm(testData);
})

test('Submit Text Box Form with invalid email', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
    const testData = TextBoxDataGenerator.create({email: 'invalid-email'});
    await elementsPage.fillTextBoxForm(testData);
    await elementsPage.submitTextBoxForm();
})
