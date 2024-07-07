import {
  BookingStates,
  IBookingStore,
  IFilterBookingsByStateUseCase,
} from "../domain";

export class FilterBookingsByStateUseCase implements IFilterBookingsByStateUseCase {
  _store: IBookingStore;
  constructor(store: IBookingStore) {
    this._store = store;
  }

  filterBookingsByState(state: BookingStates | null): void {
    this._store.filterBookingsByState(state);
  }
}
