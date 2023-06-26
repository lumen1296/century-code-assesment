import { Page } from "puppeteer";
import { DEPARTURE_SELECTOR, DESTINATION_SELECTOR, NUMBER_OF_PIECES_SELECTOR, REVISED_ARRIVAL_SELECTOR, REVISED_DEPARTURE_SELECTOR, SCHEDULED_ARRIVAL_SELECTOR, SCHEDULED_DEPARTURE_SELECTOR, TOTAL_VOLUME_SELECTOR, TOTAL_WEIGHT_VALUE_SELECTOR } from "../constants/selector";
import { getElementText } from "../utils/elementTextGetter";
import { shipmentDetailsResponse } from "./interfaces/shipmentDetails.interface";

export async function getShipmentDetails(page: Page): Promise<shipmentDetailsResponse> {
    return {
        destination: await getElementText(page, DESTINATION_SELECTOR),
        revisedArrival: await getElementText(page, REVISED_ARRIVAL_SELECTOR),
        departure: await getElementText(page, DEPARTURE_SELECTOR),
        scheduledDeparture: await getElementText(page, SCHEDULED_DEPARTURE_SELECTOR),
        revisedDeparture: await getElementText(page, REVISED_DEPARTURE_SELECTOR),
        scheduledArrival: await getElementText(page, SCHEDULED_ARRIVAL_SELECTOR),
        numberOfPieces: await getElementText(page, NUMBER_OF_PIECES_SELECTOR),
        totalWeight: await getElementText(page, TOTAL_WEIGHT_VALUE_SELECTOR),
        totalVolume: await getElementText(page, TOTAL_VOLUME_SELECTOR)
    }
}