import { Page } from "puppeteer";
import { SHIPMENT_STATUS_HISTORY_COLAPSE_SELECTOR, SHIPMENT_STATUS_HISTORY_TABLE_SELECTOR } from "../constants/selector";

export async function getshipmentStatusHistory(page: Page): Promise<string[]> {

    const shipmentStatusHistoryColpase = await page.waitForSelector(SHIPMENT_STATUS_HISTORY_COLAPSE_SELECTOR);
    await page.evaluate((shipmentStatusHistoryColpase) => {
        shipmentStatusHistoryColpase.click()
    }, shipmentStatusHistoryColpase);


    const shipmentStatusHistoryData = await page.$$eval(SHIPMENT_STATUS_HISTORY_TABLE_SELECTOR, trs => trs.map(tr => {
        return [...tr.querySelectorAll('td')].map(td => td.textContent).filter(Boolean);

    })[0]);

    return shipmentStatusHistoryData;

}