// ============================================================================
// components/Navbar.tsx   →   the bar across the top of every page
// ============================================================================
// Display's page title and links to Home page (BestiaryU), Animals, Habitats, Schedule, About Us and Favourites as well as the login/logout button
// ----------------------------------------------------------------------------
"use client";
import { createClient } from "@/lib/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "/animals", label: "Animals" },
  { href: "/habitats", label: "Habitats" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "About Us" },
  { href: "/favourites", label: "Favourites" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      setIsLoggedIn(!!data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthClick = async () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    const supabase = createClient();

    await supabase.auth.signOut();

    router.refresh();
  };
  return (
    <nav className="bg-red-50 border-b border-gray-200 px-6 py-4 w-full">
      <div className=" flex lg:flex-row flex-col ">
        <div className="lg:w-1/2 w-full flex flex-row justify-between">
          <Link
            key="/"
            href="/"
            className="text-4xl font-bold text-green-900 text-start"
          >
            BestiaryU
          </Link>
          <button
            onClick={handleAuthClick}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shrink-0 self-center lg:hidden block"
          >
            {isLoggedIn ? "Log Out" : "Log in"}
          </button>
        </div>
        <div className=" w-full lg:w-1/2 flex flex-row justify-center lg:justify-end pt-3 gap-3 lg:gap-5 lg:mr-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "lg:text-lg text-xs text-center border-b-2",
                  isActive
                    ? "text-green-900 font-bold border-green-900"
                    : "text-slate-400 font-normal border-transparent hover:text-slate-200",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={handleAuthClick}
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shrink-0 self-center hidden lg:block cursor-pointer"
        >
          {isLoggedIn ? "Log Out" : "Log in"}
        </button>
      </div>
    </nav>
  );
}
