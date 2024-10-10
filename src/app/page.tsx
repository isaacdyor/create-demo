"use client";

import { useState } from "react";
import { CancelPage } from "../components/cancel-page";
import { MainPage } from "../components/main-page";

export default function Home() {
  const [showCancelScreen, setShowCancelScreen] = useState(false);

  const [handlingAutofix, setHandlingAutofix] = useState(false);

  const handleAutofix = () => {
    console.log("Autofix triggered");
    setHandlingAutofix(true);
  };

  if (handlingAutofix && !showCancelScreen) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showCancelScreen ? (
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
