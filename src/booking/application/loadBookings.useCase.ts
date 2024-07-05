import {
  Booking,
  IBookingRepository,
  IBookingStore,
  ILoadBookingUseCase,
} from "../domain";

export class LoadBookingsUseCase implements ILoadBookingUseCase {
  _repository: IBookingRepository;
  _store: IBookingStore;
  constructor(repository: IBookingRepository, store: IBookingStore) {
    this._repository = repository;
    this._store = store;
  }

  async loadBookings(): Promise<Booking[]> {
    const bookings = await this._repository.loadBookings();
    this._store.loadBookings(bookings);
    return bookings;
  }
}
