"use client";

import ThemeToggle from "@/components/themeToogle";
import { Route } from "./page";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  route: Route;
}

const Header = ({ route }: Props) => {
  // function handleClick(e: React.MouseEvent<HTMLElement>) {
  //   e.currentTarget.style.borderBottom = "2px solid hsl(var(--foreground))";
  // }
  return (
    <header className="bg-primary-foreground w-full h-20 flex flex-row items-center px-6 gap-10 justify-between">
      <div className="flex flex-row gap-6 items-center h-full">
        <div className="logo">
          <h2 className="font-semibold text-xl">TaskSpaced</h2>
        </div>
        <nav className="h-full">
          <ul className="list-none h-full flex flex-row gap-8">
            <li
              className={`h-full flex items-center cursor-pointer ${
                route === Route.jobs ? "border-b-[3px] border-foreground" : ""
              }`}
            >
              <Link href="/find-jobs">Find Jobs</Link>
            </li>
            <li
              className={`h-full flex items-center cursor-pointer ${
                route === Route.contracts
                  ? "border-b-[3px] border-foreground"
                  : ""
              }`}
            >
              <Link href="/contracts">Contracts</Link>
            </li>
            <li
              className={`h-full flex items-center cursor-pointer ${
                route === Route.chats ? "border-b-[3px] border-foreground" : ""
              }`}
            >
              <Link href="/chats">Chats</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <div className="justify-self-end">
          <ThemeToggle />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
