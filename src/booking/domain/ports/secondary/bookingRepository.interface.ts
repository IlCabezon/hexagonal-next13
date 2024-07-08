import { IBooking } from "../../booking.entity";

export interface IBookingRepository {
  loadBookings(
    initialDate: string,
    endDate: string,
    email: string | undefined
  ): Promise<IBooking[]>;
  getBookingById(_id: string): Promise<IBooking>;
}
