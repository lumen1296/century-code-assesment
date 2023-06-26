import { shipmentDetailsResponse } from "../../shipmentDetails/interfaces/shipmentDetails.interface";
import { shipmentStatusHistoryResponse } from "../../shipmentStatusHistory/interfaces/shipmentStatusHistoy.interface";

export interface rawSectionResponse {
    shipmentStatusHistory: shipmentStatusHistoryResponse[],
    shipmentDetails: shipmentDetailsResponse
}