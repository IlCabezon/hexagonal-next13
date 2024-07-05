import { BOOKINGS_API_PATHS } from "../../../shared/domain";
import { http } from "../../../shared/infrastructure";
import { ResponseBaseDto } from "../../../shared/infrastructure";
import { Booking, IBookingRepository } from "../../domain";

export class BookingRepository implements IBookingRepository {
  async loadBookings() {
    const response = await http.get<ResponseBaseDto<Booking[]>>(
      `http://localhost:3000/${BOOKINGS_API_PATHS.BOOKINGS}`
    );

    if (!response?.data) {
      throw new Error("There are not bookings");
    }

    return response.data;
  }

  async getBookingById(_id: string) {
    const response = await http.get<ResponseBaseDto<Booking>>(
      `http://localhost:3000${BOOKINGS_API_PATHS.BOOKINGS}/${_id}`
    );

    if (!response?.data) {
      throw new Error("There are not bookings");
    }

    return response.data;
  }
}
