"use client";
import { DatePickerRange } from "@bxreact/date-picker";
import { DateTime } from "luxon";
import {
  useBookingStoreImplementation,
  useLoadBookingRepositoryImplementation,
} from "../../../infrastructure";
import { useLoadBookings } from "../../hooks";

type Props = {
  startDate: string;
  endDate: string;
};

export default function BookingDateSelector({ startDate, endDate }: Props) {
  const repository = useLoadBookingRepositoryImplementation();
  const store = useBookingStoreImplementation();
  const { loadBookings } = useLoadBookings(repository, store);

  const handleChange = async (data: any) => {
    /* data.endDate.setHours(23, 59, 59);

    const sendStartDate = DateTime.fromJSDate(data.startDate).toISO();
    const sendEndDate = DateTime.fromJSDate(data.endDate).toISO();

    await loadBookings(sendStartDate!, sendEndDate!); */
  };

  return (
    <div className="custom-datepicker bx-container-date-picker bx-assign-date d-flex align-items-center">
      <DatePickerRange
        range={{
          startDate: DateTime.fromISO(startDate).toJSDate(),
          endDate: DateTime.fromISO(endDate).toJSDate(),
        }}
        onChange={(e: any) => handleChange(e)}
        minDate={DateTime.fromISO(startDate).minus({ days: 14 }).toJSDate()}
        maxDate={DateTime.fromISO(endDate).plus({ days: 14 }).toJSDate()}
      />
    </div>
  );
}
