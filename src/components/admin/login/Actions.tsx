"use client";
import { Button } from "@/components/ui/button";
import { sendAdminMail } from "@/server/admin/sendMail";
import { ArrowLeft, Clock, Loader2, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "sonner";
interface propsType {
  state: "invalid" | "sentlink" | "notoken";
  senton: number;
}
function Actions({ state, senton = 0 }: propsType) {
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();
  const [countdown, setCountdown] = useState<number | null>(0); // don't calculate during SSR
  useLayoutEffect(() => {
    if (state !== "sentlink") return;

    // initialize only on client
    const secondsPassed = Math.ceil((Date.now() - senton) / 1000);
    const initialCountdown = Math.max(60 - secondsPassed, 0);
    setCountdown(initialCountdown);
  }, [state, senton]);

  useEffect(() => {
    if (state !== "sentlink" || countdown === null || countdown <= 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state, countdown]);
  async function handleSend() {
    try {
      setIsSending(true);
      const send = await sendAdminMail();
      setIsSending(false);
      if (!send) throw new Error();
      router.replace("/admin/login?state=sentlink&senton=" + Date.now());
    } catch (error) {
      console.log(error);
      toast.error("Error while sending link", {
        description: "Please try again",
      });
    }
  }
  return (
    <div className="space-y-3 pt-4">
      <Button
        onClick={handleSend}
        disabled={isSending || (countdown !== null && countdown > 0)}
        className="w-full"
        size="lg"
      >
        {isSending ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending Link...
          </>
        ) : state == "notoken" ? (
          <>
            <Mail className="h-4 w-4 mr-2" />
            Send Link
          </>
        ) : countdown !== null && countdown > 0 && state === "sentlink" ? (
          <>
            <Clock className="h-4 w-4 mr-2" />
            Resend in {countdown}s
          </>
        ) : (
          <>
            <Mail className="h-4 w-4 mr-2" />
            Resend Link
          </>
        )}
      </Button>
      <Button variant="secondary" className="w-full" size="lg">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Not an admin
      </Button>
    </div>
  );
}

export default Actions;
