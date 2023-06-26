import puppeteer, { ElementHandle } from 'puppeteer';
import { searchButton } from './src/searchButton';
import { getNormalizedSection } from './src/normalizedSection/normalizedSection';
import { getRawSection } from './src/rawSection/rawsection';
import { fileWriter } from './src/utils/fileWriter';


async function exec(container: string, mbl: string): Promise<any> {

    const browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: null,
    });

    const page = await browser.newPage();




    await page.goto('https://eschenker.dbschenker.com/app/tracking-public', {
        waitUntil: "domcontentloaded",
    });
    await page.waitForSelector('body');



    await searchButton(page, mbl);


    const normalizedSection = await getNormalizedSection(page);
    const rawSection = await getRawSection(page)



    const error = rawSection.shipmentStatusHistory.filter(element => element.comments.includes(container)).length === 0 ? {error: `container ${container} not found`} : undefined;


    fileWriter('./files/normalizedSections/', `files/normalizedSections/${mbl}-${container}.json`, normalizedSection);
    fileWriter('./files/rawSections/', `files/rawSections/${mbl}-${container}.json`, rawSection);
    fileWriter('./files/errors/', `files/errors/${mbl}-${container}.json`, error);

    await browser.close();

};
exec(process.argv[2], process.argv[3]);
