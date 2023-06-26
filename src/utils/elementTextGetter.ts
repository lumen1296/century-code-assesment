import { Page } from "puppeteer";
import { REVISED_ARRIVAL_SELECTOR } from "../constants/selector";

export async function getElementText(page: Page, selector: string) : Promise<string> {

    const elementSelector = await page.waitForSelector(selector);
    const elementText = await elementSelector?.evaluate(el => el.textContent);

    return elementText;

}