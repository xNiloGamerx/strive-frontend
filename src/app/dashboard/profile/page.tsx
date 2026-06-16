"use client";

import MultiToggle from "@/components/multiToggle";
import { MultiToggleOption } from "@/libs/types";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);
  const [toggleOptions, setToggleOptions] = useState<MultiToggleOption[]>(
    () => [
      {
        label: "Dark",
        icon: <MoonIcon width={14} height={14} />,
      },
      {
        label: "Auto",
        icon: <LaptopIcon width={14} height={14} />,
      },
      {
        label: "Light",
        icon: <SunIcon width={14} height={14} />,
      },
    ],
  );
  const [toggleOptions2, setToggleOptions2] = useState<MultiToggleOption[]>(
    () => [
      {
        label: "Hoffnungslos",
      },
      {
        label: "Hilfe",
      },
    ],
  );

  useEffect(() => {
    document.title = "Profil | Einstellungen";

    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="text-black dark:text-gray-100 px-2">
      <p>Einstellungen</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p>Theme</p>
          <div className="w-24">
            <MultiToggle options={toggleOptions} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Theme</p>
          <div className="w-24">
            <MultiToggle options={toggleOptions2} />
          </div>
        </div>
      </div>
    </div>
  );
}
