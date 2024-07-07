import { ListIcon, listRequestsTexts } from "../../../../shared/ui";
import { BookingStates } from "../../../domain";
import { useBookingStoreImplementation } from "../../../infrastructure";
import { useFilterBookingsByState } from "../../hooks/useFilterBookingsByState";

export default function BookingStateSelector() {
  const states = [
    listRequestsTexts.LIST_REQUEST_STATE_FILTER_ANY_VALUE,
    ...Object.values(BookingStates),
  ];
  const store = useBookingStoreImplementation();
  const { filterBookingsByState } = useFilterBookingsByState(store);

  return (
    <div className="form-select-container position-relative">
      <div className="form-select-icon">
        <ListIcon width="20" height="20" />
      </div>
      <select
        className="form-select"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          filterBookingsByState(e.target.value as BookingStates)
        }
      >
        {states.map((state, i) => (
          <option
            key={`${state}_${i}`}
            value={
              state === listRequestsTexts.LIST_REQUEST_STATE_FILTER_ANY_VALUE
                ? ''
                : state
            }
          >
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}
