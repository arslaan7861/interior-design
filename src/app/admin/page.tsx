import Projects from "@/components/admin/panels/Projects";
import FurniturePanel from "@/components/admin/panels/FurniturePanel";
import TestimonialPanel from "@/components/admin/panels/testimonialPanel";
import AdminPageTabs from "@/components/Global/AdminPageTabs";
import { verifyAdmin } from "@/server/admin/signin";
import { redirect } from "next/navigation";
import Footer from "@/components/homepage/Footer";
import LogoutButton from "@/components/admin/buttons/LogoutButton";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{
    category: string;
  }>;
}) {
  console.log("verifying admin");

  const isAdmin = await verifyAdmin();
  if (!isAdmin) redirect("/admin/login");
  const { category = "all" } = await searchParams;

  return (
    <div className="min-h-svh bg-stone-50 relative">
      {/* ========== DASHBOARD HEADER ========== */}
      <header className="stciky top-0 bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="md:text-2xl font-bold text-stone-800">
                Luxe<span className="text-amber-600">Interior</span> Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <LogoutButton />
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
      <Footer />
    </div>
  );
}
