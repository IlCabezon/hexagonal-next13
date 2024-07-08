import { IBooking } from "../../booking.entity";

export interface ILoadBookingUseCase {
  loadBookings(
    initialDate: string,
    endDate: string,
    email?: string
  ): Promise<IBooking[]>;
}
