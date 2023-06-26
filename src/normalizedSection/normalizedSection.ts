import { Page } from "puppeteer";
import { getVesselsNames } from "./vessels";
import { normalizedSectionResponse } from "./interfaces/normalizedSection.interface";
import { getElementText } from "../utils/elementTextGetter";
import { DEPARTURE_SELECTOR, REVISED_ARRIVAL_SELECTOR } from "../constants/selector";

export async function getNormalizedSection(page: Page) : Promise<normalizedSectionResponse> {

    const departure = await getElementText(page, DEPARTURE_SELECTOR);
    const revisedArrival = await getElementText(page, REVISED_ARRIVAL_SELECTOR);
    const vesselsNames = await getVesselsNames(page);

    return {departure, revisedArrival, vesselsNames};
}