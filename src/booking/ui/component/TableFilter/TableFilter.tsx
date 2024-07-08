import styles from "./tableFilter.module.css";
import { SearchIcon } from "../../../../shared/ui";
import GoWeeklyAgenda from "../GoWeeklyAgenda/GoWeeklyAgenda";

export default function TableFilter() {
  return (
    <div className="row d-flex">
      <div className="col-10">
        <div className={`${styles["form-input-container-list-request"]} mt-3`}>
          <div className="form-icon-container form-icon-left">
            <SearchIcon />
          </div>
          <input
            className={styles["form-input-with-icon"]}
            placeholder="Buscar"
            onChange={() => {}} // TODO
          ></input>
        </div>
      </div>
      <div className="col-2 mt-3">
        <GoWeeklyAgenda />
      </div>
    </div>
  );
}
