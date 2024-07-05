import React from "react";
import { usePathname } from "next/navigation";
import { useMenuStoreImplementation } from "../shared/infrastructure/secondary/menu-store";
import Platform from "../platform/ui/Platform";
import { MENU } from "../shared/domain/menu.enum";

function Home() {
  const { setMenu } = useMenuStoreImplementation();

  return (
    <div>
      home <button onClick={() => setMenu("andenes")}>Ir a andenes</button>
    </div>
  );
}

export default function AppRoutes() {
  const { menu, setMenu } = useMenuStoreImplementation();
  const pathname = usePathname();

  const routes = {
    [MENU.HOME]: () => <Home />,
    [MENU.ANDENES]: () => <Platform />,
  };

  return routes[menu]() || routes[MENU.HOME]();
}
