"use client";

import { UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";

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
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 p-2 rounded-md bg-white shadow-md">
        <div className="text-[#6B6B6B] rounded-md p-2.5 border border-[#6B6B6B]">
          <UserIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <p className="m-0 text-black dark:text-white">{username}</p>
          <p className="text-[#6B6B6B] text-sm">Klasse: {weightClass}</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex bg-gray-100 border border-gray-300 shadow-md rounded-lg">
          {Object.entries(settingsRoutes).map(([key, value], index) => (
            <Link
              key={key}
              href={value.route}
              className={`rounded-lg py-1.5 px-4 
                ${pathname === value.route && index !== 0 && "border-l-2"} 
                ${pathname === value.route && index !== Object.keys(settingsRoutes).length - 1 && "border-r-2"} 
                ${pathname === value.route && "bg-white border-gray-300 shadow-md"}`}
            >
              <p>{value.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
