"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HistoryIcon,
  HouseIcon,
  PanelRightCloseIcon,
  PanelRightOpenIcon,
  TrophyIcon,
  UserIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { type ReactElement, useState } from "react";

interface SidebarProps {
  username: string;
}

type Routes = {
  overview: {
    label: string;
    route: string;
    icon: ReactElement;
  };
  leaderboard: {
    label: string;
    route: string;
    icon: ReactElement;
  };
  history: {
    label: string;
    route: string;
    icon: ReactElement;
  };
  profile: {
    label: string;
    route: string;
    icon: ReactElement;
  };
};

export default function Sidebar({ username }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const pathname = usePathname();

  const routes: Routes = {
    overview: {
      label: "Overview",
      route: "/dashboard/overview",
      icon: <HouseIcon className="w-5 h-5" />,
    },
    leaderboard: {
      label: "Leaderboard",
      route: "/dashboard/leaderboard",
      icon: <TrophyIcon className="w-5 h-5" />,
    },
    history: {
      label: "History",
      route: "/dashboard/history",
      icon: <HistoryIcon className="w-5 h-5" />,
    },
    profile: {
      label: "Profile",
      route: "/dashboard/profile",
      icon: <UserIcon className="w-6 h-6" />,
    },
  };

  return (
    <div
      className={`flex flex-col gap-3 ${collapsed ? "w-14" : `w-80`} h-full p-2 bg-white rounded-md shadow-md transition-[width] duration-300`}
    >
      <button
        className={`flex items-center pt-2 cursor-pointer ${collapsed ? "justify-center" : "justify-start"}`}
        type="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <PanelRightCloseIcon className="w-6 h-6" />
        ) : (
          <PanelRightOpenIcon className="w-6 h-6" />
        )}
      </button>
      <div
        className={`flex items-center justify-center ${!collapsed && "mx-4"} pb-4 border-b border-gray-300`}
      >
        <Link className="cursor-pointer" href={routes.overview.route}>
          <Image
            src={collapsed ? "/favicon.ico" : "/logo.svg"}
            alt="strave logo"
            width={28}
            height={8}
            className={collapsed ? "w-8 h-8" : "w-28 h-8"}
            loading="eager"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full h-full">
        {Object.entries(routes).map(
          ([key, value]) =>
            key !== "profile" && (
              <Link key={value.route} href={value.route}>
                <div
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-[background-color] duration-300 ${pathname === value.route ? "bg-black text-gray-100" : "hover:bg-gray-100"} ${collapsed && "justify-center"}`}
                >
                  <div
                    className={
                      pathname === value.route
                        ? "text-gray-100"
                        : "text-[#6B6B6B]"
                    }
                  >
                    {value.icon}
                  </div>
                  <p className={`${collapsed && "hidden"}`}>{value.label}</p>
                </div>
              </Link>
            ),
        )}
        {/* <Link href="/dashboard/overview">
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <HouseIcon className="w-5 h-5 text-[#6B6B6B]" />
            <p className="">Overview</p>
          </div>
        </Link>
        <Link href="/dashboard/leaderboard">
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <TrophyIcon className="w-5 h-5 text-[#6B6B6B]" />
            <p className="">Leaderboard</p>
          </div>
        </Link>
        <Link href="/dashboard/history">
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <HistoryIcon className="w-5 h-5 text-[#6B6B6B]" />
            <p className="">History</p>
          </div>
        </Link> */}
        <Link className="mt-auto" href={routes.profile.route}>
          <div className="flex items-center gap-2 p-2 rounded-md transition-[background-color] duration-300 hover:bg-gray-100 cursor-pointer">
            <div
              className={`rounded-md ${!collapsed && "p-2.5 border border-[#6B6B6B]"}`}
            >
              {routes.profile.icon}
            </div>
            <div className={`flex flex-col ${collapsed && "hidden"}`}>
              <p className="m-0">{username}</p>
              <p className="text-[#6B6B6B] text-sm">test@gmail.com</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
