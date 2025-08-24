"use client";

import { useEffect } from "react";

function PWA() {
  // const [subscription, setSubscription] = useState<PushSubscription | null>(
  //   null
  // );

  useEffect(() => {
    async function registerServiceWorker() {
      await navigator.serviceWorker.register("/sw.js", {
        scope: "/admin",
        updateViaCache: "all",
      });
    }
    if ("serviceWorker" in navigator && "PushManager" in window) {
      registerServiceWorker();
    } else {
    }
  }, []);

  return <></>;
}
export default PWA;
