import React from "react";
import { usePathname } from "next/navigation";
import { MENU } from "../shared/domain/menu.enum";
import { useMenuStoreImplementation } from "../shared/infrastructure";
import Platform from "../platform/ui/Platform";
import Booking from "../booking/ui/Booking";

function Home() {
  const { setMenu } = useMenuStoreImplementation();

  return (
    <div>
      home
      <ul>
        <li>
          <button onClick={() => setMenu(MENU.ANDENES)}>Ir a andenes</button>
        </li>
        <li>
          <button onClick={() => setMenu(MENU.LIST_REQUESTS)}>
            Ir a Reservas
          </button>
        </li>
      </ul>
    </div>
  );
}

export default function AppRoutes() {
  const { menu, setMenu } = useMenuStoreImplementation();
  const pathname = usePathname();

  const routes = {
    [MENU.HOME]: () => <Home />,
    [MENU.ANDENES]: () => <Platform />,
    [MENU.LIST_REQUESTS]: () => <Booking />,
  };

  return routes[menu]() || routes[MENU.HOME]();
}
