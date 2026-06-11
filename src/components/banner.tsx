import Button from "./button";

interface BannerProps {
  title: string;
  description: string;
  acceptText: string;
  declineText: string;
  acceptAction: () => void;
  declineAction: () => void;
  hidden?: boolean;
}

export default function Banner({
  title,
  description,
  acceptText,
  declineText,
  acceptAction,
  declineAction,
  hidden,
}: BannerProps) {
  return (
    <div className="absolute bottom-2 left-2 p-4 pr-6">
      <div
        className={`flex flex-col gap-4 bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg max-w-120 shadow-md ${hidden ? "hidden" : ""}`}
      >
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex w-full gap-2">
          <Button
            text={declineText}
            onClick={() => declineAction()}
            variant="secondary"
          />
          <Button
            text={acceptText}
            onClick={() => acceptAction()}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}
