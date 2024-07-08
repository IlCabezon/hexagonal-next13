import React, { Suspense, lazy } from "react";
import { usePathname } from "next/navigation";
import { MENU } from "../shared/domain/menu.enum";
import { useMenuStoreImplementation } from "../shared/infrastructure";
import {
  MenuCard,
  listRequestsTexts,
  platformAdministrationTexts,
  weeklyAgendaTexts,
} from "../shared/ui";
import { FilterIcon } from "../shared/ui/components/icons";

const PlatformModule = lazy(() => import("../platform/ui/Platform"));
const BookingModule = lazy(() => import("../booking/ui/pages/BookingsList"));
const WeeklyAgenda = lazy(() => import("../booking/ui/pages/WeeklyAgenda"));

function Home() {
  const { setMenu } = useMenuStoreImplementation();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <h1 className="col-auto page-title home-title">Modulo Fullfilment</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-4 gap-4">
        <div>
          <MenuCard
            icons={<FilterIcon />}
            title={platformAdministrationTexts.MENU_LIST_TITLE}
            description={platformAdministrationTexts.MENU_LIST_DESCRIPTION}
            buttonText={platformAdministrationTexts.MENU_LIST_BUTTON}
            handleClick={() => setMenu(MENU.ANDENES)}
          />
        </div>
        <div>
          <MenuCard
            icons={<FilterIcon />}
            title={listRequestsTexts.MENU_LIST_TITLE}
            description={listRequestsTexts.MENU_LIST_DESCRIPTION}
            buttonText={listRequestsTexts.MENU_LIST_BUTTON}
            handleClick={() => setMenu(MENU.LIST_REQUESTS)}
          />
        </div>
        <div>
          <MenuCard
            icons={<FilterIcon />}
            title={weeklyAgendaTexts.MENU_WEEKLY_AGENDA_TITLE}
            description={weeklyAgendaTexts.MENU_WEEKLY_AGENDA_DESCRIPTION}
            buttonText={weeklyAgendaTexts.MENU_WEEKLY_BUTTON}
            handleClick={() => setMenu(MENU.WEEKLY_AGENDA)}
          />
        </div>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  const { menu, setMenu } = useMenuStoreImplementation();
  const pathname = usePathname();

  const routes = {
    [MENU.HOME]: () => <Home />,
    [MENU.ANDENES]: () => <PlatformModule />,
    [MENU.LIST_REQUESTS]: () => <BookingModule />,
    [MENU.WEEKLY_AGENDA]: () => <WeeklyAgenda />,
  };

  return (
    <Suspense fallback={<div>cargando...</div>}>
      {routes[menu]() || routes[MENU.HOME]()}
    </Suspense>
  );
}
