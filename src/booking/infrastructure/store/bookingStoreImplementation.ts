import { useCallback } from "react";
import { Booking, BookingStates, IBooking, IBookingStore } from "../../domain";
import { RootState, useAppDispatch, useAppSelector } from "../../../config";
import { bookingSlice } from "./bookingSlice";

const bookingSelector = (state: RootState) => state.bookingSlice;
const {
  loadBookings: loadBookingsAction,
  setCurrentBooking: setCurrentBookingAction,
  filterBookingsByState: filterBookingsByStateAction,
} = bookingSlice.actions;

export const useBookingStoreImplementation = (): IBookingStore => {
  const { bookings, currentBooking } = useAppSelector(bookingSelector);
  const dispatch = useAppDispatch();

  const loadBookings = useCallback(
    (bookings: IBooking[]) => dispatch(loadBookingsAction(bookings)),
    [dispatch]
  );

  const setCurrentBooking = useCallback(
    (booking: Booking) => dispatch(setCurrentBookingAction(booking)),
    [dispatch]
  );

  const filterBookingsByState = useCallback(
    (state: BookingStates) => dispatch(filterBookingsByStateAction(state)),
    [dispatch]
  );

  return {
    bookings,
    currentBooking,
    loadBookings,
    setCurrentBooking,
    filterBookingsByState,
  };
};
