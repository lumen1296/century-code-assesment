import { Page } from "puppeteer";
import { SEARCH_BUTTON_SELECTOR, SEARCH_INPUT_SELECTOR } from "./constants/selector";

export async function searchButton(page: Page, mbl: string): Promise<void> {

    await page.type(SEARCH_INPUT_SELECTOR, mbl);

    const searchButton = await page.waitForSelector(SEARCH_BUTTON_SELECTOR);
    await page.evaluate((searchButton) => {
        searchButton.click()
    }, searchButton);

}