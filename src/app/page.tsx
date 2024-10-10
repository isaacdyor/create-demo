"use client";

import { useState } from "react";
import { CancelPage } from "../components/cancel-page";
import { MainPage } from "../components/main-page";
import { GithubLink } from "../components/github-link";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [showCancelScreen, setShowCancelScreen] = useState(false);
  const [handlingAutofix, setHandlingAutofix] = useState(false);

  const handleAutofix = () => {
    console.log("Autofix triggered");
    setHandlingAutofix(true);
  };

  // Remove this early return as it's redundant with the conditional rendering below
  // if (handlingAutofix) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <GithubLink />
      {handlingAutofix ? (
        <div className="flex items-center gap-2">
          <Loader2 className="animate-spin h-5 w-5" />
          <p>Handling Autofix</p>
        </div>
      ) : showCancelScreen ? (
        <CancelPage handleAutofix={handleAutofix} />
      ) : (
        <MainPage
          handleAutofix={handleAutofix}
          setShowCancelScreen={setShowCancelScreen}
          setHandlingAutofix={setHandlingAutofix}
        />
      )}
    </div>
  );
}
