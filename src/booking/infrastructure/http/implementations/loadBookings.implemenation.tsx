import { useCallback, useMemo } from "react";
import { BookingRepository } from "../booking.repository";
import { IBookingRepository } from "../../../domain";

export const useLoadBookingRepositoryImplementation =
  (): Partial<IBookingRepository> => {
    const repository = useMemo(() => new BookingRepository(), []);

    const loadBookings = useCallback(
      async (initialDate: string, endDate: string, email?: string) => {
        return await repository.loadBookings(initialDate, endDate, email);
      },
      [repository]
    );

    return { loadBookings };
  };
