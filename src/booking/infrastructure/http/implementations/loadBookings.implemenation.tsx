import { useCallback, useMemo } from "react";
import { BookingRepository } from "../booking.repository";
import { IBookingRepository } from "../../../domain";

export const useLoadBookingRepositoryImplementation =
  (): Partial<IBookingRepository> => {
    const repository = useMemo(() => new BookingRepository(), []);

    const loadBookings = useCallback(async () => {
      return await repository.loadBookings();
    }, [repository]);

    return { loadBookings };
  };
