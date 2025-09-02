import { BasePage } from "./BasePage";
import { Locator, expect } from "@playwright/test";
import { Urls } from "../test-data/page-url-endpoints";
import { Page } from "@playwright/test";
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
        this.permanentAddressInput = page.locator('#permanentAddress')
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

    async fillTextBoxForm() {
        await this.fullNameInput.fill(faker.person.fullName());
        await this.emailInput.fill(faker.internet.email());
        await this.addressInput.fill(faker.location.streetAddress());
        await this.permanentAddressInput.fill(faker.location.streetAddress());
    }

    async submitTextBoxForm() {
        await this.submitButton.click();
        await expect(this.submittedData).toBeVisible();
    }
}