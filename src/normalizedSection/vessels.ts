import { Page } from "puppeteer";

export async function getVesselsNames(page: Page) : Promise<string[]> {

    const vesselsColpase = await page.waitForSelector('body > es-shell > es-app-root > ng-component > div.container-lg.container-details.ng-star-inserted > div > div > es-tracking-details-ocean > div > div:nth-child(3) > div');
    await page.evaluate((vesselsColpase) => {
        vesselsColpase.click()
    }, vesselsColpase);


    const vesselNames = await page.$$eval('body > es-shell > es-app-root > ng-component > div.container-lg.container-details.ng-star-inserted > div > div > es-tracking-details-ocean > div > div:nth-child(3) > div.tracking-collapse-body.ng-star-inserted > table', trs => trs.map(tr => {
        const tds = [...tr.querySelectorAll('[data-label="Name"]')];
        return tds.map(td => td.textContent);
    })[0]);

    return vesselNames;

}