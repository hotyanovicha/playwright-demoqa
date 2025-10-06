import { test } from "@playwright/test";
import { WebTablesPage } from "../../page/Elements/WebTables";
import { ElementsPage } from "../../page/Elements/ElementsPage";

test.describe('Elements Page Tests', () => {
    test('Should open and display Web Tables page correctly', async ({ page }) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.openElementPage('webTables');
        await elementsPage.expectElementPageVisible('webTablesFIX');
    });
});