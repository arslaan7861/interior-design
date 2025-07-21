import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";
import Projects from "@/components/admin/panels/Projects";
import FurniturePanel from "@/components/admin/panels/FurniturePanel";
import TestimonialPanel from "@/components/admin/panels/testimonialPanel";
import AdminPageTabs from "@/components/Global/AdminPageTabs";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{
    category: string;
  }>;
}) {
  const { category = "all" } = await searchParams;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ========== DASHBOARD HEADER ========== */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="md:text-2xl font-bold text-stone-800">
                Luxe<span className="text-amber-600">Interior</span> Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <AdminPageTabs>
          <>
            <FurniturePanel category={category} />
            <Projects />
            {/* ========== TESTIMONIALS TAB ========== */}
            <TestimonialPanel />
          </>
        </AdminPageTabs>
      </div>
    </div>
  );
}
