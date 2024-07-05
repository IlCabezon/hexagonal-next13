import { Booking } from "../../booking.entity";

export interface IBookingRepository {
  loadBookings(): Promise<Booking[]>;
  getBookingById(_id: string): Promise<Booking>;
}
