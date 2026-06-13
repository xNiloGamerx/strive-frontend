import { ChangeEvent, useEffect, useState } from "react";
import Input from "../input";
import SimpleDropdown from "../simpleDropdown";
import Button from "../button";
import { Message } from "@/libs/types";

export default function InputData() {
  const [weight, setWeight] = useState<number>(0);
  const [exercise, setExercise] = useState<string>("");

  const [weightInputMessage, setWeightInputMessage] = useState<Message | null>(
    null,
  );

  const weightMin = 1;

  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value && value < weightMin) {
      setWeightInputMessage({
        messageLevel: "error",
        messageText: "Bitte nenne eine Zahl über 0",
      });
      return;
    } else {
      setWeightInputMessage(null);
    }

    setWeight(Number(event.target.value));
  };

  useEffect(() => {
    console.log(weight);
  }, [weight]);

  return (
    <div className="flex flex-col h-full gap-2 p-4">
      <h2 className="self-center text-2xl font-bold">Daten eintragen</h2>
      <SimpleDropdown
        label="Übung"
        placeholder="Was hast du gemacht?"
        items={["Bankdrücken", "Schrägbank", "Hantel"]}
        required
        onChange={setExercise}
      />
      <Input
        label="Gewicht"
        placeholder="Wie viel hast du geschafft?"
        type="number"
        min={weightMin}
        required
        onChange={handleWeightChange}
        messageLevel={weightInputMessage?.messageLevel}
        messageText={weightInputMessage?.messageText}
      />
      <Button text="Eintragen" variant="primary" />
    </div>
  );
}
