"use client";
import ThemeToggle from "@/components/themeToogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [height, setHeight] = useState(window.scrollY);
  window.onscroll = () => {
    setHeight(window.scrollY);
  };
  return (
    <header
      className={`px-10 sticky top-0 w-full z-10 ${
        height === 0 ? "bg-background" : "bg-primary-foreground"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-3">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl ">TaskSpaced</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:opacity-75" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:opacity-75" href="/contact">
            Contact Us
          </Link>
          <Link className="mr-5 hover:opacity-75" href="/">
            Third Link
          </Link>
          <Link className="mr-5 hover:opacity-75" href="/">
            Fourth Link
          </Link>
        </nav>
        <ThemeToggle />
        <Button variant={"outline"} className="group/btn">
          <Link
            href={"/auth/login"}
            className="flex flex-row gap-1 items-center "
          >
            Signin
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 relative group-hover/btn:left-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
