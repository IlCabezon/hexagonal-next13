import { useState, useEffect } from "react";
import { MENU } from "../../shared/domain";
import { useMenuStoreImplementation } from "../../shared/infrastructure";
import { TableComponent, ArrowIcon, listRequestsTexts } from "../../shared/ui";
import {
  useLoadBookingRepositoryImplementation,
  useBookingStoreImplementation,
} from "../infrastructure";
import { useLoadBookings } from "./hooks";
import {
  BookingStateSelector,
  BookingDateSelector,
  TableFilter,
} from "./component";
import {
  bookingTableRowAdapter,
  bookingTableHeaders,
} from "./adapters/bookingTable.adapter";

import { DateTime } from "luxon";

function GoBack() {
  const { setMenu } = useMenuStoreImplementation();
  return (
    <div
      className="d-flex title-requests align-items-center"
      data-testid="mock-button"
      onClick={() => setMenu(MENU.HOME)}
    >
      <span className="a-back">
        <ArrowIcon /> Ir a home
      </span>
    </div>
  );
}

const INITIAL_DATE = DateTime.now()
  .minus({ days: 6 })
  .startOf("day")
  .toJSDate();
const END_DATE = DateTime.now().endOf("day").toJSDate();

export default function Bookings() {
  const repository = useLoadBookingRepositoryImplementation();
  const store = useBookingStoreImplementation();
  const { loadBookings } = useLoadBookings(repository, store);

  const [dates, setDates] = useState({
    initialDate: DateTime.fromJSDate(INITIAL_DATE).toISO(),
    endDate: DateTime.fromJSDate(END_DATE).toISO(),
  });

  useEffect(() => {
    const initialize = async () => {
      await loadBookings(
        DateTime.fromISO(dates.initialDate!).toFormat("dd/MM/yyyy"),
        DateTime.fromISO(dates.endDate!).toFormat("dd/MM/yyyy")
      );
    };

    initialize();
  }, []);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <GoBack />{" "}
        <h1 style={{ fontSize: "20px", fontFamily: "Montserrat", margin: 0 }}>
          {listRequestsTexts.LIST_REQUEST_PAGE_TITLE}
        </h1>
        <div className="d-flex gap-4">
          <div>
            <BookingStateSelector />
          </div>
          <div>
            <BookingDateSelector
              startDate={dates.initialDate!}
              endDate={dates.endDate!}
            />
          </div>
        </div>
      </div>
      <div
        className="row mt-5"
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          flexShrink: 0,
          alignSelf: "stretch",
          background: "var(--White, #fff)",
          borderRadius: "16px",
          boxShadow: "0px 5px 8px -2px rgba(24, 39, 75, 0.2)",
        }}
      >
        <div className="col-12">
          <TableFilter />
        </div>
        <div className="col" style={{ padding: 0 }}>
          {store.bookings && (
            <TableComponent
              data={bookingTableRowAdapter(store.bookings)}
              header={bookingTableHeaders()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
