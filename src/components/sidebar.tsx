import Link from "next/link";
import Image from "next/image";
import {
  HistoryIcon,
  HouseIcon,
  LucideProps,
  TrophyIcon,
  UserIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, ReactElement, RefAttributes } from "react";

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
  const pathname = usePathname();
  console.log(pathname);

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
    <div className="flex flex-col gap-3 w-80 h-full p-2 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-center mx-4 py-4 border-b border-gray-300">
        <Link className="cursor-pointer" href={routes.overview.route}>
          <Image
            src="/logo.svg"
            alt="strave logo"
            width={28}
            height={8}
            className="w-28 h-8"
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
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${pathname === value.route ? "bg-black text-gray-100" : "hover:bg-gray-100"}`}
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
                  <p className="">{value.label}</p>
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
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <div className="p-2.5 border border-[#6B6B6B] rounded-md">
              {routes.profile.icon}
            </div>
            <div className="flex flex-col">
              <p className="m-0">{username}</p>
              <p className="text-[#6B6B6B] text-sm">test@gmail.com</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
