import { test, expect } from '@playwright/test';
import { ElementsPage } from '../page/ElementsPage';

test('Open Elements Page', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
});

test('Submit Text Box Form', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
    const testData = await elementsPage.fillTextBoxForm();
    await elementsPage.submitTextBoxForm();
    await elementsPage.validateTextBoxForm(testData);
})


test('Submit Text Box Form with invalid email', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
    await elementsPage.fillTextBoxForm({email: 'invalid-email'});
    await elementsPage.submitTextBoxForm();
})
