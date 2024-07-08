import { MENU } from "../../../../shared/domain";
import { useMenuStoreImplementation } from "../../../../shared/infrastructure";
import { ArrowIcon } from "../../../../shared/ui";

export default function GoBack() {
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
