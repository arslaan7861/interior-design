import { LoadingScreen } from "@/components/Global/Loading";
import React from "react";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingScreen size="lg" message="Loading..." />
    </div>
  );
}

export default Loading;
