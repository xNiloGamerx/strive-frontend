"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  useEffect(() => {
    document.title = "Profil";

    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="text-black dark:text-gray-100">
      <p>Settings</p>
    </div>
  );
}
