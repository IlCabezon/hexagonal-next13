import { IBooking } from "../../booking.entity";

export interface IBookingRepository {
  loadBookings(): Promise<IBooking[]>;
  getBookingById(_id: string): Promise<IBooking>;
}
