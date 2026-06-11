import { CircleAlertIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";

interface MessageProps {
  messageLevel?: "info" | "warning" | "error";
  messageText?: string;
}

export default function Message({ messageLevel, messageText }: MessageProps) {
  const messageStyles = {
    info: "text-blue-500 bg-blue-100",
    warning: "text-orange-500 bg-orange-100",
    error: "text-red-600 bg-red-100",
  };
  const messageIcons = {
    info: <InfoIcon className="w-5 h-5" />,
    warning: <TriangleAlertIcon className="w-5 h-5" />,
    error: <CircleAlertIcon className="w-5 h-5" />,
  };

  return (
    <>
      {messageLevel && messageText ? (
        <div
          className={`flex items-center gap-1 mt-1 p-2 rounded-md ${messageStyles[messageLevel]}`}
        >
          {messageIcons[messageLevel]}
          <p>{messageText}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
