import { IBooking } from "../../booking.entity";

export interface ILoadBookingUseCase {
  loadBookings(): Promise<IBooking[]>;
}
