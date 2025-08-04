import { Loader2, Package, Home, ImageIcon, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LoadingScreenProps {
  type?: "default" | "upload" | "furniture" | "project" | "gallery";
  message?: string;
  progress?: number;
  overlay?: boolean;
  size?: "sm" | "md" | "lg" | "full";
}

export function LoadingScreen({
  type = "default",
  message,
  progress,
  overlay = false,
  size = "md",
}: LoadingScreenProps) {
  const getIcon = () => {
    switch (type) {
      case "upload":
        return <Upload className="h-8 w-8 text-primary-foreground" />;
      case "furniture":
        return <Package className="h-8 w-8 text-primary-foreground" />;
      case "project":
        return <Home className="h-8 w-8 text-primary-foreground" />;
      case "gallery":
        return <ImageIcon className="h-8 w-8 text-primary-foreground" />;
      default:
        return (
          <Loader2 className="h-8 w-8 text-primary-foreground animate-spin" />
        );
    }
  };

  const getMessage = () => {
    if (message) return message;

    switch (type) {
      case "upload":
        return "Uploading files...";
      case "furniture":
        return "Processing furniture item...";
      case "project":
        return "Creating project...";
      case "gallery":
        return "Adding to gallery...";
      default:
        return "Loading...";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-64 h-32";
      case "md":
        return "w-80 h-40";
      case "lg":
        return "w-96 h-48";
      case "full":
        return "w-full h-full";
      default:
        return "w-80 h-40";
    }
  };

  const content = (
    <div
      className={`flex items-center justify-center ${
        size === "full" ? "min-h-screen" : ""
      }`}
    >
      <Card className="shadow-none border-0">
        <CardContent
          className={`p-8 ${getSizeClasses()} flex flex-col items-center justify-center space-y-4`}
        >
          {/* Animated Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-primary p-4 rounded-full">
              {getIcon()}
            </div>
          </div>

          {/* Loading Message */}
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-stone-800">
              {getMessage()}
            </h3>
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>

          {/* Progress Bar (if provided) */}
          {typeof progress === "number" && (
            <div className="w-full space-y-2">
              <div className="w-full bg-stone-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                ></div>
              </div>
              <p className="text-sm text-stone-600 text-center">
                {Math.round(progress)}% complete
              </p>
            </div>
          )}

          {/* Brand */}
          <div className="text-center pt-4 border-t border-stone-100 w-full">
            <div className="text-sm font-medium text-stone-600">
              Chandigarh<span className="text-primary">Decor</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}

// Specialized loading components
export function UploadLoadingScreen({
  message,
  progress,
}: {
  message?: string;
  progress?: number;
}) {
  return (
    <LoadingScreen
      type="upload"
      message={message}
      progress={progress}
      overlay
    />
  );
}

export function FurnitureLoadingScreen({ message }: { message?: string }) {
  return <LoadingScreen type="furniture" message={message} overlay />;
}

export function ProjectLoadingScreen({ message }: { message?: string }) {
  return <LoadingScreen type="project" message={message} overlay />;
}

export function GalleryLoadingScreen({ message }: { message?: string }) {
  return <LoadingScreen type="gallery" message={message} overlay />;
}

// Page loading component
export function PageLoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingScreen size="lg" message="Loading dashboard..." />
    </div>
  );
}

// Inline loading component for smaller areas
export function InlineLoadingScreen({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-3">
        <Loader2 className="h-5 w-5 text-primary-foreground animate-spin" />
        <span className="text-stone-600">{message}</span>
      </div>
    </div>
  );
}

// Button loading state
export function ButtonLoadingSpinner({ size = "sm" }: { size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return <Loader2 className={`${sizeClass} animate-spin`} />;
}
