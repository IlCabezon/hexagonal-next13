import { useCallback, useMemo } from "react";
import { FilterBookingsByStateUseCase } from "../../application";
import {
  BookingStates,
  IBookingStore,
  IFilterBookingsByStateUseCase,
} from "../../domain";

export const useFilterBookingsByState = (
  store: IBookingStore
): IFilterBookingsByStateUseCase => {
  const useCase = useMemo(
    () => new FilterBookingsByStateUseCase(store),
    [store]
  );

  const filterBookingsByState = useCallback(
    (state: BookingStates) => useCase.filterBookingsByState(state),
    []
  );

  return { filterBookingsByState };
};
