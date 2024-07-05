import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking, IBookingState, STORE_NAME } from "../../domain";

const initialState: IBookingState = {
  bookings: undefined,
  currentBooking: undefined,
};

const storeName: STORE_NAME = "bookingStore";

export const bookingSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    loadBookings(state, newData: PayloadAction<Booking[]>) {
      state.bookings = newData.payload;
    },
    setCurrentBooking(state, newData: PayloadAction<Booking>) {
      state.currentBooking = newData.payload;
    },
  },
});

export default bookingSlice.reducer;
