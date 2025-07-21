"use client";
import { AttachTokenAction } from "@/server/admin/signin";
import React, { useEffect, useRef } from "react";

function AttachToken() {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    btnRef.current?.click();
  });
  return <button ref={btnRef} onClick={AttachTokenAction}></button>;
}

export default AttachToken;
