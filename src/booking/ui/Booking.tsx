import { useState, useEffect } from "react";
import { MENU } from "../../shared/domain";
import { useMenuStoreImplementation } from "../../shared/infrastructure";
import { TableComponent, ArrowIcon, listRequestsTexts } from "../../shared/ui";
import {
  useLoadBookingRepositoryImplementation,
  useBookingStoreImplementation,
} from "../infrastructure";
import { useLoadBookings } from "./hooks";
import { BookingStateSelector } from "./component";
import {
  IBookingRow,
  bookingTableRowAdapter,
  bookingTableHeaders,
} from "./adapters/bookingTable.adapter";

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

export default function Bookings() {
  const repository = useLoadBookingRepositoryImplementation();
  const store = useBookingStoreImplementation();
  const { loadBookings } = useLoadBookings(repository, store);

  useEffect(() => {
    const initialize = async () => {
      await loadBookings();
    };

    initialize();
  }, [loadBookings]);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <GoBack />{" "}
        <h1 style={{ fontSize: "20px", fontFamily: "Montserrat", margin: 0 }}>
          {listRequestsTexts.LIST_REQUEST_PAGE_TITLE}
        </h1>
        <div className="d-flex gap-4">
          <BookingStateSelector />
          <div>Filter date</div>
        </div>
      </div>
      <div className="row mt-5 table-card">
        {/* <div className="col-12">
            <FilterTableComponent />
          </div> */}
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
