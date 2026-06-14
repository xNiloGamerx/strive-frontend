"use client";

import { useEffect, useState } from "react";

export default function ProfilePayment() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  useEffect(() => {
    document.title = "Profil | Bezahlungen";

    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div>
      <p>Bezahlungen</p>
    </div>
  );
}
