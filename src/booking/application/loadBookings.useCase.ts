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

  async loadBookings(
    initialDate: string,
    endDate: string,
    email: string | undefined
  ): Promise<IBooking[]> {
    try {
      const bookings = await this._repository.loadBookings!(
        initialDate,
        endDate,
        email
      );
      this._store.loadBookings(bookings);
      return bookings;
    } catch (err) {
      this._store.loadBookings([]);
      return []
    }
  }
}
