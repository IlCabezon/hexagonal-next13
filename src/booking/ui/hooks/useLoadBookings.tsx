import { useMemo, useCallback, use } from "react";
import {
  IBookingRepository,
  IBookingStore,
  ILoadBookingUseCase,
} from "../../domain";
import { LoadBookingsUseCase } from "../../application/loadBookings.useCase";

export const useLoadBookings = (
  repository: Partial<IBookingRepository>,
  store: IBookingStore
): ILoadBookingUseCase => {
  const useCase = useMemo(
    () => new LoadBookingsUseCase(repository, store),
    [repository, store]
  );

  const loadBookings = useCallback(async () => {
    return await useCase.loadBookings();
  }, []);

  return { loadBookings };
};
