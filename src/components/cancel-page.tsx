import { Code2 } from "lucide-react";
import { ErrorBadge } from "./error-badge";

export const CancelPage: React.FC<{ handleAutofix: () => void }> = ({
  handleAutofix,
}) => {
  return (
    <div className="flex flex-col gap-5 w-[500px]">
      <ErrorBadge />
      <div className="flex flex-col gap-2">
        <p className="font-[470]">Error found in code</p>
        <p className="text-sm text-[#55576B] italic">
          AI Summary of what&apos;s happening. Example: The request to get the
          access token from Spotify failed. Verify that the Client ID and Secret
          are correctly set in your environment variables.
        </p>
      </div>
      <div className="flex w-full gap-3 h-8">
        <button className="flex items-center justify-center gap-2 grow rounded border border-[#CBCBD2] bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200">
          <Code2 className="w-[18px] h-[18px]" />
          <p className="text-sm">View code</p>
        </button>
        <button
          onClick={handleAutofix}
          className="flex items-center justify-center gap-2 grow bg-[#6170FF] hover:bg-[#4A59CD] rounded transition-colors duration-200"
        >
          <p className="text-white text-sm">Autofix errors</p>
        </button>
      </div>
    </div>
  );
};
