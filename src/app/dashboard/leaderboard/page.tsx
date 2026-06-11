"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {
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
    <div>
      <p>Leaderboard</p>
      <p>{userId}</p>
    </div>
  );
}
