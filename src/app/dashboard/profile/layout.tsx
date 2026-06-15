"use client";

import { UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

type SettingsRoutes = {
  [key: string]: {
    label: string;
    route: string;
  };
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const [navBarWidth, setNavBarWidth] = useState<number>(0);
  const [currentRouteIndex, setCurrentRouteIndex] = useState<number>(0);

  const [username, setUsername] = useState<null | string>(null);
  const [weightClass, setWeightClass] = useState<null | string>(null);

  const pathname = usePathname();

  const settingsRoutes: SettingsRoutes = {
    settings: {
      label: "Einstellungen",
      route: "/dashboard/profile",
    },
    security: {
      label: "Sicherheit",
      route: "/dashboard/profile/security",
    },
    notifications: {
      label: "Benachrichtigungen",
      route: "/dashboard/profile/notifications",
    },
    payment: {
      label: "Bezahlungen",
      route: "/dashboard/profile/payment",
    },
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }

    if (localStorage.getItem("weight-class")) {
      setWeightClass(localStorage.getItem("weight-class"));
    }

    Object.entries(settingsRoutes).forEach(([key, value], index) => {
      if (value.route === pathname) {
        setCurrentRouteIndex(index);
      }
    });

    const el = navBarRef.current;
    if (!el) return;

    const update = () => setNavBarWidth(el.clientWidth);
    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [pathname]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 p-2 rounded-md bg-white dark:bg-black shadow-md">
        <div className="text-[#6B6B6B] rounded-md p-2.5 border border-[#6B6B6B]">
          <UserIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <p className="m-0 text-black dark:text-white">{username}</p>
          <p className="text-[#6B6B6B] text-sm">Klasse: {weightClass}</p>
        </div>
      </div>
      <div className="flex">
        <div
          ref={navBarRef}
          className="relative flex w-full bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-900 shadow-md rounded-lg"
        >
          {Object.entries(settingsRoutes).map(([key, value], index) => (
            <Link
              key={key}
              href={value.route}
              className={`flex items-center justify-center rounded-lg py-1.5 px-4 text-black dark:text-white`}
              style={{
                width: `${navBarWidth / Object.keys(settingsRoutes).length}px`,
              }}
            >
              <p className="z-1 truncate">{value.label}</p>
            </Link>
          ))}
          <div
            className={`absolute h-full rounded-lg bg-white dark:bg-black border-gray-300 dark:border-gray-900 shadow-md transition-all duration-300`}
            style={{
              left: `${currentRouteIndex * (navBarWidth / Object.keys(settingsRoutes).length)}px`,
              width: `${navBarWidth / Object.keys(settingsRoutes).length}px`,
            }}
          ></div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

// ${pathname === value.route && index !== 0 && "border-l-2"}
// ${pathname === value.route && index !== Object.keys(settingsRoutes).length - 1 && "border-r-2"}
// ${pathname === value.route && "bg-white dark:bg-black border-gray-300 dark:border-gray-900 shadow-md"}
