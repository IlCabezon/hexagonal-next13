import { Button } from "@bxreact/button/index";
import styles from "./goWeeklyAgenda.module.css";
import { listRequestsTexts } from "../../../../shared/ui";
import { AddIcon } from "../../../../shared/ui";
import { useMenuStoreImplementation } from "../../../../shared/infrastructure";
import { MENU } from "../../../../shared/domain";

export default function GoWeeklyAgenda() {
  const { setMenu } = useMenuStoreImplementation();

  return (
    <Button type="button" onClick={() => setMenu(MENU.WEEKLY_AGENDA)}>
      <span className={styles["new-request-icon"]}>
        <AddIcon />
      </span>
      <span className={styles["new-request-text"]}>
        {listRequestsTexts.LIST_REQUEST_TABLE_FILTER_NEW_BOOKING}
      </span>
    </Button>
  );
}
