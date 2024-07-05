import { Booking } from "../../booking.entity";

export interface IGetBookingByIdUseCase {
  getBookingById(_id: string): Promise<Booking>;
}
