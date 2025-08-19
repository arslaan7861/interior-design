"use client";
import { useEffect } from "react";

function PWA() {
  useEffect(() => {
    async function registerServiceWorker() {
      await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "all",
      });
    }
    if ("serviceWorker" in navigator) {
      registerServiceWorker();
    } else {
    }
  }, []);

  return <></>;
}
export default PWA;
