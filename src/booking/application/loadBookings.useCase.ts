import {
  IBooking,
  IBookingRepository,
  IBookingStore,
  ILoadBookingUseCase,
} from "../domain";

export class LoadBookingsUseCase implements ILoadBookingUseCase {
  _repository: Partial<IBookingRepository>;
  _store: IBookingStore;
  constructor(repository: Partial<IBookingRepository>, store: IBookingStore) {
    this._repository = repository;
    this._store = store;
  }

  async loadBookings(): Promise<IBooking[]> {
    const bookings = await this._repository.loadBookings!();
    this._store.loadBookings(bookings);
    return bookings;
  }
}
