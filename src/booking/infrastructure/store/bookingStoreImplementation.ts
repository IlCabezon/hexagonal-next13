import { useCallback, useMemo } from "react";
import { Booking, IBookingStore } from "../../domain";
import { RootState, useAppDispatch, useAppSelector } from "../../../config";
import { bookingSlice } from "./bookingSlice";

const bookingSelector = (state: RootState) => state.bookingSlice;
const {
  loadBookings: loadBookingsAction,
  setCurrentBooking: setCurrentBookingAction,
} = bookingSlice.actions;

export const useBookingStoreImplementation = (): IBookingStore => {
  const { bookings, currentBooking } = useAppSelector(bookingSelector);
  const dispatch = useAppDispatch();

  const loadBookings = useCallback(
    (bookings: Booking[]) => dispatch(loadBookingsAction(bookings)),
    [dispatch]
  );

  const setCurrentBooking = useCallback(
    (booking: Booking) => dispatch(setCurrentBookingAction(booking)),
    [dispatch]
  );

  return { bookings, currentBooking, loadBookings, setCurrentBooking };
};
