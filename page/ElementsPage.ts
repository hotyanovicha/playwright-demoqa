import { BasePage } from "./BasePage";
import { Locator, expect } from "@playwright/test";
import { Urls } from "../test-data/page-url-endpoints";
import { Page, test } from "@playwright/test";
import { TextBoxData } from "../test-data/textbox-data-generator";

export class ElementsPage extends BasePage {

    textBoxButton: Locator;
    textBoxTitle: Locator;
    fullNameInput: Locator;
    emailInput: Locator;
    addressInput: Locator;
    permanentAddressInput: Locator;
    submitButton: Locator;
    submittedData: Locator;

    constructor(page: Page) {
        super(page);
        this.textBoxButton = page.locator('span.text', { hasText: 'Text Box' })
        this.textBoxTitle = page.getByRole('heading', { name: 'Text Box'})
        this.fullNameInput = page.locator('#userForm').getByPlaceholder('Full Name')
        this.emailInput = page.locator('#userForm').getByPlaceholder('name@example.com')
        this.addressInput = page.locator('#userForm').getByPlaceholder('Current Address')
        this.permanentAddressInput = page.locator('textarea.form-control#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.submittedData = page.locator('#output')

    }

    async openElementsPage() {
        await test.step('Open Elements Page', async () => {
        await this.navigateTo(Urls.elements);
        });
    }

    async openTextBoxPage() {
        await test.step('Open Text Box Page', async () => {
        await this.openElementsPage();
            await this.textBoxButton.click();
            await expect(this.textBoxTitle).toBeVisible();
        });
    }

    async fillTextBoxForm(testData: TextBoxData) {
        await test.step('Fill Text Box Form', async () => {
        await this.fullNameInput.fill(testData.fullName);
        await this.emailInput.fill(testData.email);
        await this.addressInput.fill(testData.currentAddress);
        await this.permanentAddressInput.fill(testData.permanentAddress);
        });
        return testData;

    }
    async validateTextBoxForm(testData: TextBoxData) {
        await test.step('Validate Text Box Form', async () => {
        await expect(this.fullNameInput).toHaveValue(testData.fullName);
        await expect(this.emailInput).toHaveValue(testData.email);
        await expect(this.addressInput).toHaveValue(testData.currentAddress);
        await expect(this.permanentAddressInput).toHaveValue(testData.permanentAddress);
        });
    }

    async submitTextBoxForm() {
        await test.step('Submit Text Box Form', async () => {
        await this.submitButton.click();
        });
    }
}