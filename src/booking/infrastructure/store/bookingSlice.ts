import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BookingStates,
  IBooking,
  IBookingState,
  STORE_NAME,
} from "../../domain";

const initialState: IBookingState = {
  bookings: undefined,
  bookingsCopy: undefined,
  currentBooking: undefined,
};

const storeName: STORE_NAME = "bookingStore";

export const bookingSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    loadBookings(state, newData: PayloadAction<IBooking[]>) {
      state.bookings = newData.payload;
      state.bookingsCopy = newData.payload
    },
    setCurrentBooking(state, newData: PayloadAction<IBooking>) {
      state.currentBooking = newData.payload;
    },
    filterBookingsByState(state, newData: PayloadAction<BookingStates | null>) {
      state.bookings = !newData.payload
        ? state.bookingsCopy
        : state.bookings?.filter(
            (booking) => booking.state === newData.payload
          );
    },
  },
});

export default bookingSlice.reducer;
