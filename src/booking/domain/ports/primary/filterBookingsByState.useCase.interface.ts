import { BookingStates } from "../../bookingStates.enum";

export interface IFilterBookingsByStateUseCase {
  filterBookingsByState(state: BookingStates | null): void;
}
