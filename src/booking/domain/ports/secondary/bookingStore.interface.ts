import type { Booking } from "../../booking.entity";

export type STORE_NAME = "bookingStore";

type BookingsStoreValue = Booking[] | undefined;
type CurrentBookingStoreValue = Booking | undefined;

export interface IBookingState {
  bookings: BookingsStoreValue;
  currentBooking: CurrentBookingStoreValue;
}

export interface IBookingStore {
  // state
  bookings: BookingsStoreValue;
  currentBooking: CurrentBookingStoreValue;

  // actions
  loadBookings(bookings: Booking[]): void;
  setCurrentBooking(booking: Booking): void;
}
