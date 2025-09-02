import { BasePage } from "./BasePage";
import { Locator, expect } from "@playwright/test";
import { Urls } from "../test-data/page-url-endpoints";
import { Page } from "@playwright/test";
import { TextBoxData } from "../test-data/textbox-data-generator";
import { faker } from '@faker-js/faker';

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
        await this.navigateTo(Urls.elements);
    }

    async openTextBoxPage() {
        await this.openElementsPage();
        await this.textBoxButton.click();
        await expect(this.textBoxTitle).toBeVisible();
    }

    async fillTextBoxForm(testData?: Partial<TextBoxData>) {
        const data = {
            fullName: faker.person.fullName(),
            email: faker.internet.email(),
            currentAddress: faker.location.streetAddress(),
            permanentAddress: faker.location.streetAddress(),
            ...testData  // Override any provided fields
        };

        await this.fullNameInput.fill(data.fullName);
        await this.emailInput.fill(data.email);
        await this.addressInput.fill(data.currentAddress);
        await this.permanentAddressInput.fill(data.permanentAddress);

        return data;
    }
    async validateTextBoxForm(testData: TextBoxData) {
        await expect(this.fullNameInput).toHaveValue(testData.fullName);
        await expect(this.emailInput).toHaveValue(testData.email);
        await expect(this.addressInput).toHaveValue(testData.currentAddress);
        await expect(this.permanentAddressInput).toHaveValue(testData.permanentAddress);
    }

    async submitTextBoxForm() {
        await this.submitButton.click();
    }
}