import { useCallback, useMemo } from "react";
import { IBookingRepository } from "../../../domain";
import { BookingRepository } from "../booking.repository";

export const useGetBookingByIdImplementation =
  (): Partial<IBookingRepository> => {
    const repository = useMemo(() => new BookingRepository(), []);

    const getBookingById = useCallback(
      async (_id: string) => {
        return await repository.getBookingById(_id);
      },
      [repository]
    );

    return { getBookingById };
  };
