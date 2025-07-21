import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

import { JSX } from "react";
import Actions from "@/components/admin/login/Actions";
import { signinAdmin } from "@/server/admin/signin";
import AttachToken from "@/components/admin/login/AttachToken";

interface VerificationPageProps {
  searchParams: Promise<{
    token: string;
    state: "invalid" | "sentlink" | "notoken";
    senton: number;
  }>;
}

export default async function AdminVerificationPage({
  searchParams,
}: VerificationPageProps) {
  // Simulate token verification on component mount
  const userEmail = "asd@gmail.com";
  const params = await searchParams;
  if (params.token) {
    const resp = await signinAdmin(params.token);

    if (resp) {
      return <AttachToken />;
      // redirect("/admin?message=Welcome " + resp.name);
    } else params.state = "invalid";
  }

  // Function to mask email address
  const maskEmail = (email: string): string => {
    if (!email) return "";

    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return email;

    if (localPart.length <= 3) {
      return `${localPart[0]}${"*".repeat(localPart.length - 1)}@${domain}`;
    }

    const visibleChars = Math.min(3, localPart.length);
    const maskedChars = localPart.length - visibleChars;
    return `${localPart.substring(0, visibleChars)}${"*".repeat(
      maskedChars
    )}@${domain}`;
  };

  params.state = ["invalid", "sentlink"].includes(params.state)
    ? params.state
    : "notoken";

  // Get dynamic content based on verification state
  const getContent: Record<
    string,
    {
      icon: JSX.Element;
      message: string;
      iconBg: string;
      title: string;
    }
  > = {
    notoken: {
      title: "Admin login panel",
      icon: <Shield className="h-8 w-8 text-primary" />,
      message:
        "To access the admin panel, please confirm your identity via the login link.",
      iconBg: "bg-amber-50",
    },
    invalid: {
      title: "Please login again",
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      message:
        "Your login link is invalid or has expired. Please request a new one.",
      iconBg: "bg-red-50",
    },
    sentlink: {
      title: "Please login again",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      message: `A new login link has been sent to ${maskEmail(userEmail)}.`,
      iconBg: "bg-green-50",
    },
  };

  const content = getContent[params.state];

  return (
    <div className="h-full w-full bg-gradient-to-br from-stone-50 via-primary/30 to-stone-100 flex items-center justify-center p-4">
      {/* Background Pattern */}

      <div className="relative w-full max-w-md">
        {/* Company Logo/Brand */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center space-x-2 text-2xl font-bold text-stone-800">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span>
              Luxe<span className="text-primary">Interior</span>
            </span>
          </div>
          <p className="text-sm text-stone-500 mt-2">Admin Panel Access</p>
        </div>

        {/* Main Verification Card */}
        <Card className="shadow-md bg-white/10 border-white/30 backdrop-blur-sm overflow-hidden">
          <CardHeader className="text-center pb-4">
            <div
              className={`w-16 h-16 rounded-full ${content.iconBg} flex items-center justify-center mx-auto mb-4 shadow-sm`}
            >
              {content.icon}
            </div>
            <CardTitle className="text-2xl font-light text-stone-800">
              {content.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <div className="text-center space-y-6">
              {/* Dynamic Message */}
              <p className="text-stone-600 leading-relaxed">
                {content.message}
              </p>

              {/* Action Buttons */}
              <Actions senton={params.senton} state={params.state} />
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-4 text-xs text-stone-500">
          <p>© 2024 LuxeInterior. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
