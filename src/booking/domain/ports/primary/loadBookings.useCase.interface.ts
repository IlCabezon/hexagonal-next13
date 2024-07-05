import { Booking } from "../../booking.entity";

export interface ILoadBookingUseCase {
  loadBookings(): Promise<Booking[]>;
}
