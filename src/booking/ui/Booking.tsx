import { useEffect } from "react";
import { MENU } from "../../shared/domain";
import { useMenuStoreImplementation } from "../../shared/infrastructure";
import { useLoadBookingRepositoryImplementation } from "../infrastructure/http/implementations/loadBookings.implemenation";
import { useBookingStoreImplementation } from "../infrastructure/store";
import { useLoadBookings } from "./hooks";

function GoBack() {
  const { setMenu } = useMenuStoreImplementation();
  return <button onClick={() => setMenu(MENU.HOME)}>Ir a home</button>;
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
    <div>
      <h1>Bookings</h1>
      {store.bookings?.map((booking) => (
        <div key={booking._id}>
          {booking.numberRequest} - State {booking.state} - Date: {booking.date}
        </div>
      ))}
      <GoBack />
    </div>
  );
}
