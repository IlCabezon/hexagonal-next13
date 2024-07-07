import { IBooking } from "../../domain";
import { listRequestsTexts } from "../../../shared/ui";

export interface IBookingRow {
  id: string;
  supplier: string;
  nApplication: number;
  date: string;
  startTime: string;
  endTime: string;
  reference: string;
  platform: string;
  pallets: number;
  state: string;

  [key: string]: string | number;
}

export function bookingTableRowAdapter(
  data: IBooking | IBooking[]
): IBookingRow[] {
  let formatedData: IBooking[];
  if (!Array.isArray(data)) {
    formatedData = [data];
  } else {
    formatedData = data;
  }

  return formatedData.map((booking) => ({
    id: booking._id,
    supplier: booking.supplier,
    nApplication: booking.numberRequest,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    reference: booking.reference,
    platform: booking.platform,
    pallets: booking.palletsQuantity,
    state: booking.state,
  }));
}

export function bookingTableHeaders() {
  return {
    supplier: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_SUPPLIER,
    nApplication: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_APPLICATION,
    date: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_DATE,
    startTime: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_START_TIME,
    endTime: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_END_TIME,
    reference: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_REFERENCE,
    platform: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_PLATFORM,
    pallets: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_PALLETS_QUANTITY,
    state: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_STATE,
    action: listRequestsTexts.LIST_REQUEST_TABLE_HEADER_ACTION,
  };
}
