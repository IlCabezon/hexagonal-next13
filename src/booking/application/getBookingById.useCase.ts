import {
  Booking,
  IBookingRepository,
  IBookingStore,
  IGetBookingByIdUseCase,
} from "../domain";

export class GetBookinByIdUseCase implements IGetBookingByIdUseCase {
  _repository: IBookingRepository;
  _store: IBookingStore;
  constructor(repository: IBookingRepository, store: IBookingStore) {
    this._repository = repository;
    this._store = store;
  }

  async getBookingById(_id: string): Promise<Booking> {
    const booking = await this._repository.getBookingById(_id);
    this._store.setCurrentBooking(booking);
    return booking;
  }
}
