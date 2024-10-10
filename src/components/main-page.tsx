import { useEffect, useState } from "react";
import { ErrorBadge } from "./error-badge";

export const MainPage: React.FC<{
  handleAutofix: () => void;
  setHandlingAutofix: (show: boolean) => void;
  setShowCancelScreen: (show: boolean) => void;
}> = ({ handleAutofix, setHandlingAutofix, setShowCancelScreen }) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setTimeout(() => setHandlingAutofix(true), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setHandlingAutofix]);

  return (
    <div className="flex flex-col gap-3 w-[300px]">
      <ErrorBadge />
      <button
        className="rounded bg-[#6171FF] flex items-center justify-center h-[68px] relative overflow-hidden"
        onClick={handleAutofix}
      >
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#4A59CD]"
          style={{
            width: `${((4 - countdown) / 4) * 100}%`,
            transition: "width 1s linear",
          }}
        ></div>
        <p className="font-medium text-white z-10 relative">Autofix errors</p>
      </button>
      <p
        className="underline font-[470] text-[#55576B] hover:cursor-pointer text-xs"
        onClick={() => setShowCancelScreen(true)}
      >
        Cancel
      </p>
    </div>
  );
};
