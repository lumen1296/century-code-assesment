import { Page } from "puppeteer";
import { getshipmentStatusHistory } from "../shipmentStatusHistory/shipmentStatusHistory";
import { rawSectionResponse } from "./interfaces/rawSection.interface";
import { shipmentStatusHistoryResponse } from "../shipmentStatusHistory/interfaces/shipmentStatusHistoy.interface";
import { getShipmentDetails } from "../shipmentDetails/shipmentDetails";

export async function getRawSection(page: Page): Promise<rawSectionResponse> {


    const shipmentStatusHistoryData = await getshipmentStatusHistory(page);
    const shipmentDetails = await getShipmentDetails(page);
    const shipmentStatusHistory: shipmentStatusHistoryResponse[] = []
    for (let i = 0; i < shipmentStatusHistoryData.length; i += 4) {
        let shipmentStatus = shipmentStatusHistoryData.slice(i, i + 4);
        shipmentStatusHistory.push({
            event: shipmentStatus[0],
            date: shipmentStatus[1],
            location: shipmentStatus[2],
            comments: shipmentStatus[3]
        });
    }
    const rawSection: rawSectionResponse = {

        shipmentStatusHistory,
        shipmentDetails

    };

    return rawSection;
}