import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import React from "react";

function LoadingLoginPage() {
  return (
    <div className="min-h-screen sm:bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div
              className={`w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mx-auto`}
            >
              <Loader2 className="h-8 w-8 text-stone-400 animate-spin" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-light text-stone-800">
                Verifying Access
              </h1>
              <p className="text-stone-600">Verifying your access...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoadingLoginPage;
