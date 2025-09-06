import { BasePage } from "../BasePage";
import { Locator, expect, Page, test } from "@playwright/test";
import { TextBoxData } from "../../test-data/textbox-data-generator";


export class TextBoxPage extends BasePage {

    fullNameInput: Locator;
    emailInput: Locator;
    addressInput: Locator;
    permanentAddressInput: Locator;
    submitButton: Locator;
    receivedFullName: Locator;
    receivedEmail: Locator;
    receivedAddress: Locator;
    receivedPermanentAddress: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameInput = page.locator('#userForm').getByPlaceholder('Full Name')
        this.emailInput = page.locator('#userForm').getByPlaceholder('name@example.com').describe('Email Input')
        this.addressInput = page.locator('#userForm').getByPlaceholder('Current Address').describe('Address Input')
        this.permanentAddressInput = page.locator('textarea.form-control#permanentAddress').describe('Permanent Address Input');
        this.submitButton = page.getByRole('button', { name: 'Submit' }).describe('Submit Button')
        
        // Fixed selectors for output validation - using text content, not placeholders
        this.receivedFullName = page.locator('#output #name').describe('Received Full Name')
        this.receivedEmail = page.locator('#output #email').describe('Received Email')
        this.receivedAddress = page.locator('#output #currentAddress').describe('Received Address')
        this.receivedPermanentAddress = page.locator('#output #permanentAddress').describe('Received Permanent Address')
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
    
    async validateTextBoxFormData(testData: TextBoxData) {
        await test.step('Validate Text Box Form', async () => {
        await expect(this.fullNameInput).toHaveValue(testData.fullName);
        await expect(this.emailInput).toHaveValue(testData.email);
        await expect(this.addressInput).toHaveValue(testData.currentAddress);
        await expect(this.permanentAddressInput).toHaveValue(testData.permanentAddress);
    })}
    
    async validateSubmittedData(testData: TextBoxData) {
        await test.step('Validate Submitted Data', async () => {
          // Validate submitted data with proper text matching
        await expect(this.receivedFullName).toContainText(testData.fullName);
        await expect(this.receivedEmail).toContainText(testData.email);
        await expect(this.receivedAddress).toContainText(testData.currentAddress);
        await expect(this.receivedPermanentAddress).toContainText(testData.permanentAddress);
    })}

    async submitTextBoxForm() {
        await test.step('Submit Text Box Form', async () => {
        await this.submitButton.click();
        });
    }
}