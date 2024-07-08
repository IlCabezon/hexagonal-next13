import styles from "./tableFilter.module.css";
import { Button } from "@bxreact/button/index";
import { SearchIcon, AddIcon, listRequestsTexts } from "../../../../shared/ui";

type Props = {};

export default function TableFilter({}: Props) {
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
            onChange={() => {}}
          ></input>
        </div>
      </div>
      <div className="col-2 mt-3">
        <Button type="button" onClick={() => {}}>
          <span className={styles["new-request-icon"]}>
            <AddIcon />
          </span>
          <span className={styles["new-request-text"]}>
            {listRequestsTexts.LIST_REQUEST_TABLE_FILTER_NEW_BOOKING}
          </span>
        </Button>
      </div>
    </div>
  );
}
