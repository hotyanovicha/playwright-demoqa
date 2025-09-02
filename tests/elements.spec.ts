import { test, expect } from '@playwright/test';
import { ElementsPage } from '../page/ElementsPage';

test('Open Elements Page', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
});

test('Submit Text Box Form', async ({page}) =>{
    const elementsPage = new ElementsPage(page);
    await elementsPage.openTextBoxPage();
    await elementsPage.submitTextBoxForm();
})

