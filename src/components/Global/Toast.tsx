"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

function Toast() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  useEffect(() => {
    if (message) toast.info(message);
  }, [searchParams]);
  return <></>;
}

export default Toast;
