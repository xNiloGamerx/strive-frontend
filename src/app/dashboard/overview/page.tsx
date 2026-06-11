"use client";

import { useEffect, useState } from "react";

export default function Overview() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  useEffect(() => {
    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="text-black dark:text-gray-100">
      <p>Overview</p>
      <p>{userId}</p>
    </div>
  );
}
