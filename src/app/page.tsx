"use client";

import Banner from "@/components/banner";
import Button from "@/components/button";
import Input from "@/components/input";
import SimpleDropdown from "@/components/simpleDropdown";
import Link from "next/link";
import Image from "next/image";
import { type ChangeEvent, useEffect, useRef, useState } from "react";

type Message = {
  messageLevel: "info" | "warning" | "error";
  messageText: string;
};

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [weightClass, setWeightClass] = useState<string>("");

  const [usernameMessage, setUsernameMessage] = useState<null | Message>(null);
  const [genderMessage, setGenderMessage] = useState<null | Message>(null);
  const [weightClassMessage, setWeightClassMessage] = useState<null | Message>(
    null,
  );

  const [acceptedLocalStorage, setAcceptedLocalStorage] =
    useState<boolean>(false);
  const [openStorageBanner, setOpenStorageBanner] = useState<boolean>(false);

  const fields = {
    username: {
      required: true,
    },
    gender: {
      required: true,
    },
    weightClass: {
      required: true,
    },
  };

  useEffect(() => {
    setAcceptedLocalStorage(
      JSON.parse(localStorage.getItem("localStorageAccepted") ?? "false"),
    );
    setOpenStorageBanner(!acceptedLocalStorage);
  }, [acceptedLocalStorage]);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmitRegister = () => {
    if (!JSON.parse(localStorage.getItem("localStorageAccepted") ?? "false")) {
      setAcceptedLocalStorage(false);
      return;
    }

    let valid = false;
    if (fields.username.required && username.trim() === "") {
      setUsernameMessage({
        messageLevel: "error",
        messageText: "Benutzername ist ein Pflichtfeld",
      });
      valid = false;
    } else {
      setUsernameMessage(null);
    }

    if (fields.gender.required && gender.trim() === "") {
      setGenderMessage({
        messageLevel: "error",
        messageText: "Geschlecht ist ein Pflichtfeld",
      });
      valid = false;
    } else {
      setGenderMessage(null);
    }

    if (fields.weightClass.required && weightClass.trim() === "") {
      setWeightClassMessage({
        messageLevel: "error",
        messageText: "Gewichtsklasse ist ein Pflichtfeld",
      });
      valid = false;
    } else {
      setWeightClassMessage(null);
    }

    if (!valid) return;
  };

  return (
    <div className="flex flex-col grow justify-between bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full h-10"></div>

      <div className="flex items-center justify-center grow">
        <div className="flex flex-col gap-1 min-w-2/7">
          <div className="flex gap-2 pl-3">
            <span className="flex justify-center bg-white text-black px-12 py-1.5 rounded-lg shadow-md">
              <Image
                src="/logo.svg"
                alt="strave logo"
                width={28}
                height={8}
                className="w-28 h-8"
              />
            </span>
          </div>
          <div className="flex flex-col justify-center bg-white grow rounded-xl shadow-md p-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold">Hallo 👋</h2>
              <p className="text-gray-400">Registriere dich um zu starten!</p>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <Input
                label="Name"
                placeholder="Gebe einen Benutzernamen an"
                onChange={handleUsernameChange}
                required={fields.username.required}
                messageLevel={usernameMessage?.messageLevel}
                messageText={usernameMessage?.messageText}
              />
              <SimpleDropdown
                label="Geschlecht"
                placeholder="Bitte wähle dein Geschlecht"
                items={["Mann", "Frau", "Divers"]}
                onChange={setGender}
                required={fields.gender.required}
                messageLevel={genderMessage?.messageLevel}
                messageText={genderMessage?.messageText}
              />
              <SimpleDropdown
                label="Gewichtsklasse"
                placeholder="Bitte wähle deine Gewichtsklasse"
                items={[
                  "10kg",
                  "30kg",
                  "50kg",
                  "70kg",
                  "90kg",
                  "110kg",
                  "130kg",
                ]}
                onChange={setWeightClass}
                required={fields.weightClass.required}
                messageLevel={weightClassMessage?.messageLevel}
                messageText={weightClassMessage?.messageText}
              />
              <Button
                text="Los gehts!"
                type="button"
                variant={acceptedLocalStorage ? "primary" : "disabled"}
                onClick={handleSubmitRegister}
                messageLevel="info"
                messageText={
                  !acceptedLocalStorage
                    ? "Bitte akzeptiere erst die Speicherung im Lokalen Speicher"
                    : ""
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 h-10 text-gray-400">
        <Link href={"/impressum"}>Impressum</Link>
        <span>|</span>
        <Link href={"/datenschutz"}>Datenschutz</Link>
      </div>

      <Banner
        title={"Lokaler Speicher"}
        description={
          "Bist du damit einverstanden, dass für die App essentielle Daten, in deinem Lokalen Speicher abgelegt werden?"
        }
        acceptText={"Ja"}
        declineText={"Nein"}
        acceptAction={() => {
          localStorage.setItem("localStorageAccepted", JSON.stringify(true));
          setOpenStorageBanner(false);
          setAcceptedLocalStorage(true);
        }}
        declineAction={() => {
          setOpenStorageBanner(false);
        }}
        hidden={!openStorageBanner}
      />
    </div>
  );
}
