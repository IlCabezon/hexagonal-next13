import { BOOKINGS_API_PATHS } from "../../../shared/domain";
import { http } from "../../../shared/infrastructure";
import { ResponseBaseDto } from "../../../shared/infrastructure";
import { IBooking, IBookingRepository } from "../../domain";

export class BookingRepository implements IBookingRepository {
  async loadBookings(
    initialDate: string,
    endDate: string,
    email: string | undefined
  ) {
    const response = await http.get<ResponseBaseDto<IBooking[]>>(
      `http://localhost:3001/${
        BOOKINGS_API_PATHS.BOOKINGS
      }?startDate=${initialDate}&endDate=${endDate}${
        email ? "&email=${email}" : ""
      }`
    );

    if (!response?.data) {
      throw new Error("There are not bookings");
    }

    return response.data;
  }

  async getBookingById(_id: string) {
    const response = await http.get<ResponseBaseDto<IBooking>>(
      `http://localhost:3001${BOOKINGS_API_PATHS.BOOKINGS}/${_id}`
    );

    if (!response?.data) {
      throw new Error("There are not bookings");
    }

    return response.data;
  }
}
