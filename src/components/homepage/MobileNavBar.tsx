import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Home, Boxes, FolderKanban, Info, Mail } from "lucide-react";

export const navItems = [
  {
    label: "Home",
    icon: Home,
    href: "/#home",
  },
  {
    label: "Collections",
    icon: Boxes,
    href: "/collections",
  },
  {
    label: "Projects",
    icon: FolderKanban,
    href: "/#projects",
  },
  {
    label: "About",
    icon: Info,
    href: "/about",
  },
  {
    label: "Contact",
    icon: Mail,
    href: "/#contact",
  },
];

export function MobileNavBar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu className={cn("h-6", isScrolled ? "text-black" : "text-white")} />
      </SheetTrigger>
      <SheetContent side="bottom" className="md:hidden pb-8">
        <SheetHeader>
          <SheetTitle className="text-center">
            Chandigarh<span className="text-primary">Decor</span>
          </SheetTitle>
        </SheetHeader>
        <ul
          className="grid grid-cols-3 sm:grid-cols-5 gap-4 p-4 items-center"
          aria-label="Site sections"
        >
          {navItems.map((item) => (
            <li key={item.label} className="text-left">
              <Link
                href={item.href}
                className={` hover:text-primary w-full transition-colors duration-300 relative group`}
                aria-label={`Go to ${item.label} section`}
              >
                <SheetClose asChild>
                  <Button
                    variant={"ghost"}
                    className=" bg-secondary p-2 w-full flex-col h-max  aspect-square hover:bg-primary/10 hover:text-primary"
                  >
                    <item.icon />
                    {item.label}
                  </Button>
                </SheetClose>
              </Link>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <a href="tel:+918699062901" className="w-full">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              aria-label="Book a consultation"
            >
              Book Consultation
            </Button>
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
