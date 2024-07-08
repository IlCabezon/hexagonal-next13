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

  const loadBookings = useCallback(
    async (startDate: string, endDate: string, email: string | undefined) => {
      return await useCase.loadBookings(startDate, endDate, email);
    },
    []
  );

  return { loadBookings };
};
