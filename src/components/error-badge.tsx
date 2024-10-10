import { TriangleAlert } from "lucide-react";

export const ErrorBadge = () => {
  return (
    <div className="flex bg-neutral-100 items-center rounded text-[#37394E] gap-[7px] p-1 w-min">
      <TriangleAlert className="h-4 w-4 shrink-0" />
      <p className="whitespace-nowrap text-xs">Error in generated code</p>
    </div>
  );
};
