import type { IBooking } from "../../booking.entity";
import { BookingStates } from "../../bookingStates.enum";

export type STORE_NAME = "bookingStore";

type BookingsStoreValue = IBooking[] | undefined;
type CurrentBookingStoreValue = IBooking | undefined;

export interface IBookingState {
  bookings: BookingsStoreValue;
  bookingsCopy: BookingsStoreValue;
  currentBooking: CurrentBookingStoreValue;
}

export interface IBookingStore {
  // state
  bookings: BookingsStoreValue;
  bookingsCopy: BookingsStoreValue;
  currentBooking: CurrentBookingStoreValue;

  // actions
  loadBookings(bookings: IBooking[]): void;
  setCurrentBooking(booking: IBooking): void;
  filterBookingsByState(state: BookingStates | null): void;
}
