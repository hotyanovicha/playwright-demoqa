import { BasePage } from "../BasePage";
import { Locator, expect } from "@playwright/test";
import { Urls } from "../../test-data/page-url-endpoints";
import { Page, test } from "@playwright/test";

// Define page configuration type
interface ElementPageConfig {
    buttonText: string;
    titleText: string;
    url?: string;
}

// Configuration for all element pages
const ELEMENT_PAGES = {
    textBox: {
        buttonText: 'Text Box',
        titleText: 'Text Box'
    },
    webTables: {
        buttonText: 'Web Tables',
        titleText: 'Web Tables'
    }
} as const;

export class ElementsPage extends BasePage {
    
    constructor(page: Page) {
        super(page);
    }

    // Generic method to get button locator for any element page
    private getElementButton(buttonText: string): Locator {
        return this.page.locator('span.text', { hasText: buttonText })
            .describe(`${buttonText} Button`);
    }

    // Generic method to get title locator for any element page
    private getElementTitle(titleText: string): Locator {
        return this.page.getByRole('heading', { name: titleText })
            .describe(`${titleText} Title`);
    }

    async openElementPage(pageKey: keyof typeof ELEMENT_PAGES) {
        const config = ELEMENT_PAGES[pageKey];
        await test.step(`Open ${config.titleText} Page`, async () => {
            await this.navigateTo(Urls.elements);
            await this.getElementButton(config.buttonText).click();
        });
    }

    // Generic method to verify any element page is visible
    async expectElementPageVisible(pageKey: keyof typeof ELEMENT_PAGES) {
        const config = ELEMENT_PAGES[pageKey];
        await expect(this.getElementTitle(config.titleText)).toBeVisible();
    }
    
   
}